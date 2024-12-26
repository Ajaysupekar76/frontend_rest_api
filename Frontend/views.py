from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def register(request):
    return render(request, 'register.html')


def login(request):
    return render(request, 'login.html')

def dashboard(request):
    return render(request, 'dashboard.html')
