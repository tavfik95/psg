from statistics import mode
from django.db import models

# Create your models here.
class ProduitEnfant(models.Model) : 
    
    photoUrl = models.CharField(max_length=254, blank= True, null=True)
    price = models.CharField(max_length=254, blank= True, null=True)
    shortDescription= models.CharField(max_length=254, blank=True, null=True)
    description= models.TextField(blank=True, null=True)
    details= models.TextField(blank=True, null=True)
    categorie = models.CharField(max_length=10, blank= True, null=True)

    def __str__(self):
            return self.shortDescription

class ProduitFemme(models.Model) : 
    
    photoUrl = models.CharField(max_length=254, blank= True, null=True)
    price = models.CharField(max_length=254, blank= True, null=True)
    shortDescription= models.CharField(max_length=254, blank=True, null=True)
    description= models.TextField(blank=True, null=True)
    details= models.TextField(blank=True, null=True)
    categorie = models.CharField(max_length=10, blank= True, null=True)

    def __str__(self):
            return self.shortDescription
    

class ProduitHomme(models.Model) : 
    
    photoUrl = models.CharField(max_length=254, blank= True, null=True)
    price = models.CharField(max_length=254, blank= True, null=True)
    shortDescription= models.CharField(max_length=254, blank=True, null=True)
    description= models.TextField(blank=True, null=True)
    details= models.TextField(blank=True, null=True)
    categorie = models.CharField(max_length=10, blank= True, null=True)

    def __str__(self):
            return self.shortDescription