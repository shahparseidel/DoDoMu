from django.db import models

# Create your models here.




class OffersAndRequests(models.Model):
    category = models.CharField(max_length=120, default="x")
    category2 = models.CharField(max_length=120, default="x")
    description = models.TextField()
    location = models.CharField(max_length=120, default="x")
    maxrange = models.IntegerField()
    pickupordelivery =  models.BooleanField()
    urgency = models.TextField()
    username = models.EmailField()
    state = models.IntegerField()
    multihumanhelp = models.BooleanField(default=False)
    offerorrequest = models.BooleanField(default=False)
    TScreate = models.DateTimeField(auto_now_add=True)
    TSlastmodified = models.DateTimeField(auto_now=True)


    def _str_(self):
        return self.description 