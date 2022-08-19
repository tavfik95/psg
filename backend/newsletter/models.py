from django.db import models

# Create your models here.
class User(models.Model) : 
    
    address = models.CharField(max_length=254, blank= False, null=False)
    firstName = models.CharField(max_length=254, blank= False, null=False)
    lastName = models.CharField(max_length=254, blank= False, null=False)

    def __str__(self):
        return self.firstName + ' ' +self.lastName