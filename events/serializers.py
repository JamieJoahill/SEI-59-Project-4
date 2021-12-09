# from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Event
# from categories.models import Category
# from venues.models import Venue
from categories.serializers import CategorySerializer
from venues.serializers import VenueSerializer
from jwt_auth.serializers import User, UserSerializer
import logging
# from django.contrib.auth import get_user_model
# User = get_user_model()

# from django.contrib.auth.models import User
# user = User.objects.get(id=user_id)

# staffprofile.user = user

logging = logging.getLogger(__name__)

class EventSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(many=True)
    # venue = VenueSerializer(many=True)

    class Meta:
        model = Event
        fields = '__all__'

class PopulatedEventSerializer(EventSerializer):
    category = CategorySerializer(many=False)
    venue = VenueSerializer(many=False)
    owner = UserSerializer(many=False)


    # created_by = UserSerializer(many=True)

    # def create(self, validated_data):
    #     category_data = validated_data.pop('category')
    #     cat_obj_list = []
    #     for cat_data in category_data:
    #         cat_obj = Category.objects.create(**cat_data)
    #         cat_obj_list.append(cat_obj)
    #     category = Event.objects.create(**validated_data)
    #     category.set(cat_obj_list)
    #     category.save()
    #     return Event.objects.create(category=category, **validated_data)


        # def create(self, validated_data):
        #     print('Validated_data', validated_data)
        #     venue_data = validated_data.pop('venue')
        #     created_by_data = validated_data.pop('auth_user')
        #     category_data = validated_data.pop('category')

        #     category = Category(category=category_data.pop('category'))
        #     venue = Venue(
        #         name = venue_data.pop('name'),
        #         address = venue_data.pop('address'),
        #         venue_image = venue_data.pop('venue_image'),
        #         capacity = venue_data.pop('capacity')
        #     )

        #     created_by = User(
        #         password = created_by_data.pop('password'),
        #         password_confirmation = created_by_data.pop('password_confirmation'),
        #         username = created_by_data.pop('username'),
        #         email = created_by_data.pop('email')
        #     )

        #     return Event.objects.create(category=category, venue=venue, created_by=created_by, **validated_data)