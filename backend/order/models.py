from django.db import models

class Order(models.Model) : 
    
    at_created= models.DateTimeField(auto_now_add=True, editable=False)
    firstName = models.CharField(max_length=254, blank= False, null=False)
    lastName = models.CharField(max_length=254, blank= False, null=False)
    address = models.CharField(max_length=254, blank= False, null=False)
    phone = models.CharField(max_length=254, blank= False, null=False)
    mail = models.CharField(max_length=254, blank= False, null=False)
    item= models.CharField(max_length=254, blank= False, null=False)
    price = models.CharField(max_length=254, blank= False, null=False)




    def __str__(self):
        return self.firstName + ' ' +self.lastName