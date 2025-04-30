from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.generic.list import ListView
from django.views.generic import DetailView
import json

# Create your views here.
from django.views import View
from .models import Reviewers
from .forms import ReviewForm

star_rating = list()

class Reviews(View):


    def get(self, request):
        form = ReviewForm()
        return render(request, "review\index.html" , {
            "forms": form,
        })
    
    def post(self, request):

        form = ReviewForm(request.POST, request.FILES)

        # The rating data fetched from the AJAX call readed here 
        if request.headers.get('x-requested-with') == 'XMLHttpRequest':
            data_dict = json.load(request)
            star_num = data_dict['star_num']
            star_rating.append(star_num)
        if form.is_valid():
            form.save(commit=False)
            form.instance.rating = star_rating[-1] + 1
            form.save()
            return HttpResponseRedirect(reverse("thankyou"))

        return render(request, "review\index.html" , {
            "forms": form,
        })
    
def thankyou_view(request):
    return render(request, r"review\thankyou.html")

class ListReviews(ListView):
    template_name = r"review\listreviews.html"
    model = Reviewers
    context_object_name = "reviews"

class DetailViews(DetailView):
    template_name = r"review\detailviews.html"
    model = Reviewers
    context_object_name = "review"