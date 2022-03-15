from django.db import models
from django.contrib.auth.models import User



# Create your models here.

class OffersAndRequests(models.Model):
    #user = models.OneToOneField(User, on_delete=models.CASCADE,default=0)
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    #userid = models.IntegerField()
    category = models.CharField(max_length=120, default="x")
    category2 = models.CharField(max_length=120, default="x")
    description = models.TextField()
    location = models.CharField(max_length=120, default="x")
    maxrange = models.IntegerField()
    pickupordelivery =  models.BooleanField()
    urgency = models.TextField()
    state = models.IntegerField()
    multihumanhelp = models.BooleanField(default=False)
    offerorrequest = models.BooleanField(default=False)
    TScreate = models.DateTimeField(auto_now_add=True)
    TSlastmodified = models.DateTimeField(auto_now=True)
    ackuserid=models.IntegerField(default=-1)

    def _str_(self):
        return self.description 



