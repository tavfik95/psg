from django.http import JsonResponse
from django.shortcuts import render

from actualite.models import Article


def actualite(request):
    articles = list(Article.objects.values())
    return JsonResponse(articles, safe=False)

def article(request, id):
    article =(Article.objects.filter(id=id).values())
    data = (article[0])
    # return JsonResponse(produit, safe=False)
    return JsonResponse(data, safe=False)
    
