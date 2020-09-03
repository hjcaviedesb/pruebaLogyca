# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Prime
from .models import Pair

admin.site.register(Prime)
admin.site.register(Pair)

