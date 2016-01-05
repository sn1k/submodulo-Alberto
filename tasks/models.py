from __future__ import unicode_literals

from django.db import models

class Task(models.Model):
    description = models.CharField(max_length=128)
    is_done = models.BooleanField(default=False)
