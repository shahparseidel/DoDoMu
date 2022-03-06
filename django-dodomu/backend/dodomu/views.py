from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import dodomuSerializer
from .serializers import OffersAndRequestsSerializer
from .models import dodomu
from .models import OffersAndRequests

# Create your views here.
class dodomuView(viewsets.ModelViewSet):
    serializer_class = dodomuSerializer
    queryset = dodomu.objects.all()


class OffersAndRequestsView(viewsets.ModelViewSet):
    serializer_class = OffersAndRequestsSerializer
    queryset = OffersAndRequests.objects.all()