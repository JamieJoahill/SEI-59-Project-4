from os import stat
from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer, PopulatedEventSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


import logging
# Create your views here.

log = logging.getLogger(__name__)

class EventDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    # Delete an event
    def delete(self, _request, pk):
        try:
            event = Event.objects.get(id=pk)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    # Update an event
    def put(self, request, pk):
        event = Event.objects.get(id=pk)
        updated_event = EventSerializer(event, data=request.data)
        # updated_event = PopulatedEventSerializer(event, data=request.data)
        if updated_event.is_valid():
            updated_event.save()
            return Response(updated_event.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_event.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, _request, pk):
        event = Event.objects.get(id=pk)
        # serialized_event = EventSerializer(event)
        serialized_event = PopulatedEventSerializer(event)
        return Response(serialized_event.data, status=status.HTTP_200_OK)

class EventListView(APIView):
    # Create/POST an event
    def post(self, request):
        event = EventSerializer(data = request.data)
        # event = PopulatedEventSerializer(data = request.data)
        # log.info("request data : ", request.data)
        print("request data : ---> ", request.data)

        if event.is_valid():
            print("Event was valid, saving.")
            event.save(owner=request.user)
            print("Event was saved successfully")
            return Response(event.data, status=status.HTTP_201_CREATED)
        else:
            return Response(event.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # GET an event
    def get(self, _request):
        events = Event.objects.all()
        # serialized_events = EventSerializer(events, many=True)
        serialized_events = PopulatedEventSerializer(events, many=True)
        print("Returning serialized events:", serialized_events)
        return Response(serialized_events.data, status=status.HTTP_200_OK)
