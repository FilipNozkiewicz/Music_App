from django.contrib.auth import authenticate , login
from django.contrib.auth.models import User
from django import forms
from django.shortcuts import render, redirect


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)  #hide characters for password special widget

    class Meta:   # class meta is info about my class
        model = User  # whenever user is created is gonnabe added to db table
        fields = ['username' , 'email' , 'password']  # 3 area for user  # inputy do formularza


        # display  blank form





