from django.db import models
from django.urls import reverse

# Create your models here.
class Album(models.Model): # must inherit from that
    #create var
    artist = models.CharField(max_length=100)
    album_title = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)    # gatunek
    #album_logo = models.CharField(max_length=500)
    album_logo = models.FileField() # now we can use a file instead of url

    def get_absolute_url(self):  # to redirect a songs to the template calkowity url
        return reverse('music:index'  )# handle arg not defined in advanced # detail takes a prmary key of album
    # whenever we create the album it has a primary key and is added to the view

    def __str__(self):
        return self.album_title + ' - ' + self.artist

class Song(models.Model):
    # song needs to be a part of an album
    album = models.ForeignKey(Album , on_delete=models.CASCADE)  # whenever sth is part of sth other
    # on cacade delete the parent (Album) delete the song
    file_type = models.CharField(max_length=10)
    song_title = models.CharField(max_length=250)
    yt_link = models.CharField(max_length=1000)
    is_favourite = models.BooleanField(default=False)

    def __str__(self):
        return self.song_title