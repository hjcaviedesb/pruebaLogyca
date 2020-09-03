# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Prime(models.Model):
    
    primes = models.TextField(blank = True)
    number = models.IntegerField(unique = True,default = 1)
    
    def __str__(self):
        return str(self.number)

class Pair(models.Model):
    
    pairs = models.TextField(blank = True)
    number = models.IntegerField(unique = True,default = 1)

    def __str__(self):
        return str(self.number)