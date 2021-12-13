from django.db import models
from django.db.models.deletion import CASCADE

# from venues.models import Venue
from categories.models import Category
from django.contrib.auth.models import User

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=500, default=None)
    description = models.CharField(max_length=1000, default=None)
    date = models.DateField()
    photo = models.CharField(max_length=1000, default=None)
    location = models.CharField(max_length=500, default=None)
    start_time = models.CharField(max_length=100, default=None)
    finish_time = models.CharField(max_length=100, default=None, null=True, blank=True)
    category = models.ForeignKey('categories.Category', on_delete=models.CASCADE)
    venue = models.ForeignKey('venues.Venue', on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"{self.title} {self.description} {self.date} {self.photo} {self.location}"