from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer
# Create your views here.

class EventDetailView(APIView):
    def get(self, _request, pk):
        event = Event.objects.get(id=pk)
        serialized_event = EventSerializer(event)
        return Response(serialized_event.data, status=status.HTTP_200_OK)

class EventListView(APIView):

    def post(self, request):
        event = EventSerializer(data = request.data)
        if event.is_valid():
            event.save()
            return Response(event.data, status=status.HTTP_201_CREATED)
        else:
            return Response(event.errros, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, _request):
        events = Event.objects.all()
        serialized_events = EventSerializer(events, many=True)
        return Response(serialized_events.data, status=status.HTTP_200_OK)
