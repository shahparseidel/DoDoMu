from rest_framework import serializers
from .models import OffersAndRequests




class OffersAndRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OffersAndRequests
        fields = ('id','category', 'category2','description','location','maxrange','pickupordelivery','urgency','state')
        #fields = '__all__'

