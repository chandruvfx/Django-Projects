from django.urls import path, include
from .views import Reviews, thankyou_view, ListReviews, DetailViews

urlpatterns = [
    path("", Reviews.as_view(), name="index"),
    path("all-reviews/", ListReviews.as_view(), name="listreview"),
    path("all-reviews/<int:pk>", DetailViews.as_view(), name="detailview"),
    path("thank-you/", thankyou_view, name="thankyou"),
]
