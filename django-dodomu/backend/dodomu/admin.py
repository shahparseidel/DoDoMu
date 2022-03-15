from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import OffersAndRequests

class OffersAndRequestsAdmin(admin.ModelAdmin):
   list_display = ('id','category','category2','description', 'location',  'maxrange', 'pickupordelivery', 'urgency',  'username', 
   'state',  'multihumanhelp',  'offerorrequest',   'TScreate',   'TSlastmodified')

# Register your models here.

admin.site.register(OffersAndRequests)