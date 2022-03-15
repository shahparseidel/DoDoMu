from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
#from django.http import HttpResponse

from .serializers import OffersAndRequestsSerializer
from .serializers import OffersAndRequestsAckSerializer
from .models import OffersAndRequests

# Create your views here.

class OffersAndRequestsAckView(viewsets.ModelViewSet):
    serializer_class = OffersAndRequestsAckSerializer
    queryset = OffersAndRequests.objects.all()


class OffersAndRequestsView(viewsets.ModelViewSet):
    serializer_class = OffersAndRequestsSerializer
    queryset = OffersAndRequests.objects.all()


"""     def get_queryset(self):

        This view should return a list of all the purchases
        for the currently authenticated user.

        this_user = self.request.user
        return OffersAndRequests.objects.exclude(user_id=this_user.id) """


class OpenItemListView(viewsets.ModelViewSet):
    serializer_class = OffersAndRequestsSerializer
        
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        this_user = self.request.user
        return OffersAndRequests.objects.filter(user_id=this_user.id)


@api_view([ 'POST'])
def addrequest(request):
    datarecord = request.data
    OnRItem = OffersAndRequests(category=datarecord['category'],category2=datarecord['category2'],
    description=datarecord['description'],location=datarecord['location'],maxrange=datarecord['maxrange'],
    pickupordelivery=datarecord['pickupordelivery'],urgency=datarecord['urgency'],state=datarecord['state'],user_id=request.user.id)
    OnRItem.save()
    return Response(datarecord, status=status.HTTP_201_CREATED)
    # serializer = OffersAndRequestsSerializer(data=datastream)
    # if serializer.is_valid():
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def user_data(request):
    current_user = request.user
    resp_item = {'user_id': current_user.id, 'username': current_user.username}
    return Response(resp_item) 

