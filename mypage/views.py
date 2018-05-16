from django.shortcuts import render, redirect

# Create your views here.
from django.template import loader
from django.http import HttpResponse


def index(request):
    template = loader.get_template('mypage/main_page.html')
    context = {}
    return HttpResponse(template.render(context , request))

def linux(request):
    template = loader.get_template('mypage/linux.html')
    context = {}
    return HttpResponse(template.render(context , request))

def bikes(request):
    template = loader.get_template('mypage/bikes.html')
    context = {}
    return HttpResponse(template.render(context, request))

def games(request):
    template = loader.get_template('mypage/games.html')
    context = {}
    return HttpResponse(template.render(context, request))

def snake(request):
    template = loader.get_template('mypage/snake.html')
    context = {}
    return HttpResponse(template.render(context, request))
def szubienica(request):
    template = loader.get_template('mypage/szubienica.html')
    context = {}
    return HttpResponse(template.render(context, request))
def tic(request):
    template = loader.get_template('mypage/tic-tac-toe.html')
    context = {}
    return HttpResponse(template.render(context, request))
def pong(request):
    template = loader.get_template('mypage/pong.html')
    context = {}
    return HttpResponse(template.render(context, request))