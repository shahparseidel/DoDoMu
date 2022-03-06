from rest_framework import serializers
from .models import dodomu
from .models import OffersAndRequests

class dodomuSerializer(serializers.ModelSerializer):
    class Meta:
        model = dodomu
        fields = ('id', 'title', 'description', 'completed')


class OffersAndRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OffersAndRequests
        fields = ('id','category', 'description','location','maxrange','pickupordelivery','urgency','state')
        #fields = '__all__'