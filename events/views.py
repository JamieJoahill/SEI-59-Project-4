from os import stat
from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer
# Create your views here.

class EventDetailView(APIView):
    # Delete an event
    def delete(self, _request, pk):
        try:
            event = Event.object.get(id=pk)
        except:
            return Response(status=status.HTTP_500_INTERNALSERVER_ERROR)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # Update an event
    def put(self, request, pk):
        event = Event.objects.get(id=pk)
        updated_event = EventSerializer(event, data=request.data)
        if updated_event.is_valid():
            updated_event.save()
            return Response(updated_event.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_event.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, _request, pk):
        event = Event.objects.get(id=pk)
        serialized_event = EventSerializer(event)
        return Response(serialized_event.data, status=status.HTTP_200_OK)

class EventListView(APIView):
    # Create/POST an event
    def post(self, request):
        event = EventSerializer(data = request.data)
        if event.is_valid():
            event.save()
            return Response(event.data, status=status.HTTP_201_CREATED)
        else:
            return Response(event.errros, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    # GET an event
    def get(self, _request):
        events = Event.objects.all()
        serialized_events = EventSerializer(events, many=True)
        return Response(serialized_events.data, status=status.HTTP_200_OK)
