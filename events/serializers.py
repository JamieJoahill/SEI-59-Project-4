from rest_framework import serializers
from .models import Event
from categories.models import Category
from venues.models import Venue
from categories.serializers import CategorySerializer
from venues.serializers import VenueSerializer

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class PopulatedEventSerializer(EventSerializer):
    category = CategorySerializer(many=False)
    venue = VenueSerializer(many=False)