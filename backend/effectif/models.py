from email.quoprimime import body_check
from django.db import models

class Joueurs(models.Model) : 
    at_created= models.DateTimeField(auto_now_add=True, editable=False)
    at_update= models.DateTimeField(auto_now=True, editable=False)
    firstName = models.CharField(max_length=50, blank=False, null=False)
    lastName = models.CharField(max_length=50, blank=False, null=False)
    number = models.CharField(max_length=2, blank=False, null=False)
    poste = models.CharField(max_length=50, blank=False, null=False)
    photoUrl = models.CharField(max_length=254, blank= True, null=True)
    photoUrlBis = models.CharField(max_length=254, blank= True, null=True)
    nationality= models.CharField(max_length=254, blank=False, null=False)
    entete=models.CharField(max_length=254, blank= True, null=True)
    body=models.CharField(max_length=254, blank= True, null=True)
    footer=models.CharField(max_length=254, blank= True, null=True)

    def __str__(self):
            return self.firstName + ' ' +self.lastName
