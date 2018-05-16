from django.conf.urls import url
from . import views

app_name='mypage'

urlpatterns = [
    url(r'^$' , views.index),
    url(r'^/linux/$' , views.linux , name='linux'),
    url(r'^/bikes/$' , views.bikes , name='bikes'),
    url(r'^/games/$' , views.games , name='games'),
    url(r'^/snake/$' , views.snake , name='snake'),
    url(r'^/szubienica/$' , views.szubienica , name='szubienica'),
    url(r'^pong/$' , views.pong , name='pong'),
    url(r'^/tic-tac-toe/$' , views.tic , name='tic')
]