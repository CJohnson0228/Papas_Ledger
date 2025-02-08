from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Entry(models.Model):
    payee = models.CharField(max_length=100)
    date = models.DateField()
    check_number = models.CharField(max_length=12, default='')
    comment = models.CharField(max_length=100, default='')
    amount = models.DecimalField(max_digits=19, decimal_places=2)
    debit = models.BooleanField(default=True)

class Account(models.Model):
    name = models.CharField(max_length=100)
    beginning_balance = models.IntegerField()
    opening_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='accounts')
    entries = models.ManyToManyField(Entry)

    def __str__(self):
        return self.title
