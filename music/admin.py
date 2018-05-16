from django.contrib import admin
from . models import Album , Song

admin.site.register(Album)  # now we can manage album from Admin Panel
admin.site.register(Song)