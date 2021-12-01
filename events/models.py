from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=500, default=None)
    description = models.CharField(max_length=1000, default=None)
    date = models.CharField(max_length=100, default=None)
    photo = models.CharField(max_length=1000, default=None)
    location = models.CharField(max_length=500, default=None)
    start_time = models.CharField(max_length=100, default=None)
    finish_time = models.CharField(max_length=100, default=None)

    def __str__(self):
        return f"{self.title} {self.description} {self.date} {self.photo} {self.location}"