from django.db import models


class LigueUn(models.Model) : 
    
    annee = models.CharField(max_length=4, blank=False, null=False)
    victoire = models.CharField(max_length=3, blank=False, null=False)
    nul = models.CharField(max_length=3, blank=False, null=False)
    defaite = models.CharField(max_length=3, blank=False, null=False)
    point = models.CharField(max_length=3, blank=False, null=False)

    def __str__(self):
            return self.annee
    
class CoupeDeFrance(models.Model) : 
    
    annee = models.CharField(max_length=4, blank=False, null=False)
    adversaire = models.CharField(max_length=12, blank=False, null=False)
    score = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
            return self.annee

class CoupeDeLaLigue(models.Model) : 
    
    annee = models.CharField(max_length=4, blank=False, null=False)
    adversaire = models.CharField(max_length=25, blank=False, null=False)
    score = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
            return self.annee

class TropheesDesChampions(models.Model) : 
    
    annee = models.CharField(max_length=4, blank=False, null=False)
    adversaire = models.CharField(max_length=25, blank=False, null=False)
    score = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
            return self.annee

class CoupeDesCoupes(models.Model) : 
    
    annee = models.CharField(max_length=4, blank=False, null=False)
    adversaire = models.CharField(max_length=25, blank=False, null=False)
    score = models.CharField(max_length=5, blank=False, null=False)

    def __str__(self):
            return self.annee
