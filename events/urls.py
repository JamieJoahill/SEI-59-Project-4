from django.urls import path
from .views import EventListView, EventDetailView
from . import views

urlpatterns = [
    path('', EventListView.as_view()),
    path('<int:pk>/', EventDetailView.as_view()),
]