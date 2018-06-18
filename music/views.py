from django.contrib import messages
from django.db.models import Q
from django.shortcuts import render, redirect
from django.http import  HttpResponse
# Create your views here.
from django.template import loader
from django.shortcuts import render , get_object_or_404
from django.http import Http404
from django.views import generic
from django.shortcuts import render , redirect
from django.contrib.auth import authenticate , login
from music.models import Album, Song
from django.views.generic.edit import CreateView , UpdateView , DeleteView
from django.views.generic import View
from django.urls import reverse_lazy
from django import forms
from . forms import UserForm   # import file from directory


def index(request):
    # connect the databaase
    all_albums = Album.objects.all()  # zwracam wszystkie albumy do zmiennej

    #for album in all_albums:
     #   url = '/music/'+ str(album.id) +'/'
      #  html += '<a href="'+url+'">'+ album.album_title +'</a><br>' # database connection

    template = loader.get_template('music/index.html') # from music load the template
    dictionary = {
        'all_albums' : all_albums,  # przekazanie do templatki uwazac zeby sie nie pomylic bo tak to wizi html
    }
   # return  HttpResponse(template.render(dictionary , request))  # each url is conneted to the view
    return render(request , 'music/index.html' , dictionary)

def detail(request , album_id):   # album id is the second argument in the adress   ///   wyglad jednego konkretnego obiektu
   # return HttpResponse("<h1>this is albun nr: "  + str(album_id) + "</h1>")
    try:
        album = Album.objects.get(pk=album_id) # if such album pk exists
    except Album.DoesNotExist:
        raise Http404("Album does not exist")  # jesli ni ma takieo obiketu to zwroc 404
        album = get_object_or_404(Album , pk=album_id)   # get object fro m album by primary key
    return render(request , 'music/detail.html' , {'album' : album })

def favourite(request ,album_id):
    album = get_object_or_404(Album , pk=album_id)
    try:
       selected_song = album.song_set.get(pk=request.POST['song']) # zwraca id wybranej odpowiedzi jako stringa
    except (KeyError , Song.DoesNotExist):
        return render(request , 'music/detail.html' , {
            'album':album ,
            'error_message': "Not selected a song",   # ustawiam errora do przeslania do html
        })
    else:
        if selected_song.is_favourite == False:
            selected_song.is_favourite = True;
        else:
            selected_song.is_favourite = False
        selected_song.save() # and when everything is ok jus t return
        return render(request , 'music/detail.html' , {'album' : album})



class AlbumCreate(CreateView): # a view that display a form to create an bject
    model = Album  # class from models.py
    # whatfields are needed what attributes
    fields = ['artist' , 'album_title' , 'genre' , 'album_logo']  # to sa pola do petli
    # przekazane pola do fomularza

class AlbumUpdate(UpdateView):
    model = Album  # class from models.py
    fields = ['artist' , 'album_title' , 'genre' , 'album_logo']


class AlbumDelete(DeleteView ):
    model = Album  # wanna delete an album
    success_url = reverse_lazy('music:index')

def post_delete(request , id=None):
    instance = get_object_or_404(Album , id=id)
    instance.delete()
    return redirect('music:index')

def post_update(request , id=None):
    instance = get_object_or_404(Album , id=id)


class UserFormView(View):
    form_class = UserForm
    template_name = 'music/registration_form.html'


    def get(self, request):  # whenever user call the form he is gonna have this request
        form = self.form_class(None)  # no data cause user put the data in   # defaultowo nie mam zadnych danych
        return render(request, self.template_name, {'form': form})  # return rendered form
        # wywolanie formularza get zwraca mi to

# process form data
    def post(self, request):  # whenever submit the form is post request
        # po prostu przesylam gotowy formularz
        form = self.form_class(request.POST)  # pass in information which are typed in
        # whenever is submit all info is stored in this POST data
        if form.is_valid(): # sprawdza poprawnosc formularza wbudowane
           user = form.save(commit=False)  # create an object but does not save it to DB
           # normalize like for instance date (different time zones)
           # using the same data format
           username = form.cleaned_data['username']  # taka sama wersja danych
           password = form.cleaned_data['password']
           # change user password
           user.set_password(password)  # ustawia password
           user.save()  # save to DB    # i teraz mozna sie poslugiwac zmienna user w templatkach

         # returns User object if credentials are correct
           user = authenticate(username=username, password=password)  # for logging
           # bierze haslo i usera i srawdza czy istnieja w DB

           if user is not None:  # if user exists

            if user.is_active:
                login(request, user)
                request.user
                return redirect('music:index')  # after logging redirect to home page

        return render(request, self.template_name, {'form': form})  # if form is not valid return this blank form

def search(request):
    if(request.method == 'POST'):
        #query = request.GET.get("q")
        query = request.POST['srch']
        if query:     # if there is a query
            match = Album.objects.filter(Q(album_title=query) | Q(artist=query))

            if match:  # if it matches then
                return redirect('music:index')

            else:
                return messages.error(request , 'no result found')

        else:
            return redirect('music:search')

    else:
        return redirect('music:index')




