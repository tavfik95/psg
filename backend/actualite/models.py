from statistics import mode
from django.db import models

# Create your models here.
class Article(models.Model) : 
    
    photoTitle = models.CharField(max_length=254, blank= False, null=False)
    photoTexte = models.CharField(max_length=254, blank= False, null=False)
    title = models.CharField(max_length=254, blank= False, null=False)
    shortDescription= models.CharField(max_length=254, blank=False, null=False)
    questionOne= models.TextField(blank= True, null=True)
    answerOne= models.TextField(blank= True, null=True)
    questionTwo= models.TextField(blank= True, null=True)
    answerTwo= models.TextField(blank= True, null=True)
    questionThree= models.TextField(blank= True, null=True)
    answerThree= models.TextField(blank= True, null=True)
    questionFour= models.TextField(blank= True, null=True)
    answerFour= models.TextField(blank= True, null=True)
    questionFive= models.TextField(blank= True, null=True)
    answerFive= models.TextField(blank= True, null=True)
    questionSix= models.TextField(blank= True, null=True)
    answerSix= models.TextField(blank= True, null=True)
    questionSeven= models.TextField(blank= True, null=True)
    answerSeven= models.TextField(blank= True, null=True)
    questionEight= models.TextField(blank= True, null=True)
    answerEight= models.TextField(blank= True, null=True)
    questionNine= models.TextField(blank= True, null=True)
    answerNine= models.TextField(blank= True, null=True)
    questionTen= models.TextField(blank= True, null=True)
    answerTen= models.TextField(blank= True, null=True)

    def __str__(self):
            return self.title

    
    