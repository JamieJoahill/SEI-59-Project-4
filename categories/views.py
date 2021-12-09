from django.shortcuts import render

from venues import serializers

from .models import Category
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CategorySerializer
from events.serializers import PopulatedEventSerializer
# from .models import Event

class CategoryDetailView(APIView):
    def get(self, request, pk):
        category = Category.objects.get(id=pk)
        serialized_category = CategorySerializer(category)
        return Response(serialized_category.data, status=status.HTTP_200_OK)

# Create your views here.
class CategoryListView(APIView):

    # Create a Category
    def post(self, request):
        category = CategorySerializer(data = request.data)
        if category.is_valid():
            category.save()
            return Response(category.data, status=status.HTTP_201_CREATED)
        else:
            return Response(category.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


    # Get all Categories
    def get(self, _request):
        categories = Category.objects.all()
        serialized_categories = CategorySerializer(categories, many=True)
        return Response(serialized_categories.data, status=status.HTTP_200_OK)
