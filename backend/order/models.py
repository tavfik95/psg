from django.db import models

class Order(models.Model) : 
    
    at_created= models.DateTimeField(auto_now_add=True, editable=False)
    firstName = models.CharField(max_length=254, blank= True, null=True)
    lastName = models.CharField(max_length=254, blank= True, null=True)
    address = models.CharField(max_length=254, blank= True, null=True)
    phone = models.CharField(max_length=254, blank= True, null=True)
    mail = models.CharField(max_length=254, blank= True, null=True)
    item= models.CharField(max_length=254, blank= True, null=True)
    price = models.CharField(max_length=254, blank= True, null=True)




    def __str__(self):
        return self.firstName + ' ' +self.lastName