from django.db import models
from django.db.models.deletion import CASCADE

from venues.models import Venue
from categories.models import Category

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=500, default=None)
    description = models.CharField(max_length=1000, default=None)
    date = models.DateField()
    photo = models.CharField(max_length=1000, default=None)
    location = models.CharField(max_length=500, default=None)
    start_time = models.CharField(max_length=100, default=None)
    finish_time = models.CharField(max_length=100, default=None)
    category = models.ForeignKey(Category, blank=True, null=True,on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} {self.description} {self.date} {self.photo} {self.location}"