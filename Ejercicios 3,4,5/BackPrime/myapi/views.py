# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from .models import Pair
from .models import Prime
from .serializers import PrimeSerializer
from .serializers import PairSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from .methods import print_first_N_primes
from .methods import printTwinPrime

# Create your views here.

@api_view(['GET'])

def primeView(request,pk):

    result = []
    n = int(pk)

    if request.method == 'GET':
        result = print_first_N_primes(n)
    
    listToStr = ' '.join([str(elem) for elem in result]) 

    return JsonResponse(str(listToStr),safe = False)

@api_view(['GET'])

def pairView(request,pk):

    result = []
    n = int(pk)

    if request.method == 'GET':
        result = printTwinPrime(n)
    
    listToStr = ' '.join([str(elem) for elem in result]) 

    return JsonResponse(listToStr,safe = False)


def primeViewDB(request,num):

    num = int(num)
    if request.method == 'GET':
        try:
            primes = Prime.objects.get(number=num)
            primes_serializer = PrimeSerializer(primes)
        except Prime.DoesNotExist:

            result = print_first_N_primes(num)
            listToStr = ' '.join([str(elem) for elem in result]) 
            primes = Prime(number=num,primes=listToStr)
            primes.save()
            primes_serializer = PrimeSerializer(primes)

        return JsonResponse(primes_serializer.data, safe=False)

    
def pairViewDB(request,num):

    num = int(num)
    if request.method == 'GET':
        try:
            pairs = Pair.objects.get(number=num)
            pairs_serializer = PairSerializer(pairs)
        except Pair.DoesNotExist:
            result = printTwinPrime(num)
            listToStr = ' '.join([str(elem) for elem in result]) 
            pairs = Pair(number=num, pairs=listToStr)
            pairs.save()
            pairs_serializer = PairSerializer(pairs)

        return JsonResponse(pairs_serializer.data, safe=False)

