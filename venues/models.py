from typing import Match
from django.db import models

# Create your models here.
class Venue(models.Model):
    name = models.CharField(max_length=500, default=None)
    address = models.CharField(max_length=1000, default=None)
    venue_image = models.CharField(max_length=1000, default=None)
    capacity = models.CharField(max_length=1000,default=None)

    def __str__(self):
        return f"{self.name} {self.address} {self.venue_image} {self.capacity}"