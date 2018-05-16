from django.conf.urls import url
from . import views

app_name = 'music'  # we can use it in templtes

urlpatterns = [    # just one letter mistake
    # music
    url(r'^$' , views.index , name='index') , # request anything
    url(r'^register/$' , views.UserFormView.as_view() , name='register') , # request anything   # music/register



    url(r'^(?P<album_id>[0-9]+)/detail/$' , views.detail , name='detail'), # ^ - beginning $ - end  # by album id we look for number of an album
   # url(r'^(?P<pk>[0-9]+)/$' , views.pppView , name='ppp'), # ^ - beginning $ - end  # by album id we look for number of an album
    # + means that is gonna match any following integer
    #music / favourite
    url(r'^(?P<album_id>[0-9]+)/favourite/$' , views.favourite , name='favourite'),  # takes info from music and pass it to favourite url


   # url(r'^(?P<album_id>[0-9]+)/$' , views.DetailView.as_view() , name='detail'),
    url(r'album/add/$' , views.AlbumCreate.as_view() , name='album-add'), # sciezka do dodawania albumow dlatego album/add


    url(r'album/(?P<pk>\d+)/$' , views.AlbumUpdate.as_view() , name='album-update'), # sciezka do dodawania albumow dlatego album/add


    url(r'album/(?P<album_id>[0-9]+)/delete/$' , views.AlbumDelete.as_view() , name='delete'), # sciezka do dodawania albumow dlatego album/add

    url(r'^(?P<id>\d+)/delete/$' , views.post_delete , name='album-delete' )
    # to czyta jako form do albumow
]


# as_view() -- zwroc jako view