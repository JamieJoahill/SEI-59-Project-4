from django.shortcuts import render

def index(request):
    return render(request, 'SEI-59-Project-4/client/build/index.html')