from django.forms import ModelForm
from .models import Reviewers
from django import forms


class ReviewForm(ModelForm):
    class Meta:
        model = Reviewers
        fields = '__all__'
        labels = {
            "user_name": "Enter Your Name",
            "web_url": "Enter URL",
            "user_review": "Your Review!",
            "profile_image": "Upload Your Image"
        }
        error_messages = {
            "user_name": {
                "required": "Must Enter Your Name",
                "max_length": "Only 40 charecters Allowed"
            }
        }

    def __init__(self, *args, **kwrags) -> None:
        super().__init__(*args, **kwrags)

        # Hide The Rating Field in order to showcase the Stars widget
        self.fields['rating'].widget = forms.HiddenInput()
        self.fields['rating'].required = False