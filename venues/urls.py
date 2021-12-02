from django.urls import path
from .views import VenueListView

urlpatterns = [
    path('', VenueListView.as_view())
]