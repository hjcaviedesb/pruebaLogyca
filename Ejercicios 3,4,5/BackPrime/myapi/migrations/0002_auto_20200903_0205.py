# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-09-03 02:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pair',
            name='number',
            field=models.IntegerField(default=1, unique=True),
        ),
        migrations.AddField(
            model_name='prime',
            name='number',
            field=models.IntegerField(default=1, unique=True),
        ),
    ]
