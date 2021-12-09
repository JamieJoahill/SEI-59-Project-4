from django.urls import path
from .views import VenueListView, VenueDetailView

urlpatterns = [
    path('', VenueListView.as_view()),
    path('<int:pk>/', VenueDetailView.as_view())
]