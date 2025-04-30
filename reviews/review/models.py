from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Reviewers(models.Model):
    user_name = models.CharField(max_length=20)
    web_url = models.URLField(max_length=50)
    user_review = models.TextField()
    rating = models.IntegerField()
    profile_image = models.ImageField(upload_to='images/')

    def __str__(self) -> str:
        return f"{self.user_name} ({self.rating})"
