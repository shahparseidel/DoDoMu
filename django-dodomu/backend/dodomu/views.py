from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from rest_framework import viewsets

from .serializers import OffersAndRequestsSerializer
from .models import OffersAndRequests


# Create your views here.



class OffersAndRequestsView(viewsets.ModelViewSet):
    serializer_class = OffersAndRequestsSerializer
    queryset = OffersAndRequests.objects.all()

