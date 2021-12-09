from django.shortcuts import render

from django.http.response import HttpResponse
from .models import Venue
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status
from .serializers import VenueSerializer

# Create your views here.
class VenueDetailView(APIView):
    def get(self, _request, pk):
        venue = Venue.objects.get(id=pk)
        serialized_venue = VenueSerializer(venue)
        return Response(serialized_venue.data, status=status.HTTP_200_OK)

class VenueListView(APIView):

    # Create venue
    def post(self, request):
        venue = VenueSerializer(data = request.data)
        if venue.is_valid():
            venue.save()
            return Response(venue.data, status=status.HTTP_201_CREATED)
        else: 
            return Response(venue.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        

    # get all venues
    def get(self, _request):
        venues = Venue.objects.all()
        serialized_venues = VenueSerializer(venues, many=True)
        return Response(serialized_venues.data, status=status.HTTP_200_OK)