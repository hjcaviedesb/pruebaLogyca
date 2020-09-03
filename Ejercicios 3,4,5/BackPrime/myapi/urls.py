from django.conf.urls import url 
from myapi import views 
 
urlpatterns = [ 
    url(r'^api/primes/(?P<pk>[0-9]+)$', views.primeView),
    url(r'^api/pairs/(?P<pk>[0-9]+)$', views.pairView),
    url(r'^api/primesDB/(?P<num>[0-9]+)$', views.primeViewDB),
    url(r'^api/pairsDB/(?P<num>[0-9]+)$', views.pairViewDB)
]
