from django.shortcuts import render

from django.http.response import HttpResponse
from .models import Venue
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status
from .serializers import VenueSerializer

# Create your views here.
class VenueDetailView(APIView):
    pass

class VenueListView(APIView):
    pass