from django.http import JsonResponse

from boutique.models import ProduitEnfant, ProduitFemme, ProduitHomme

def boutiqueEnfant(request):
    boutiqueEnfant = list(ProduitEnfant.objects.values())
    return JsonResponse(boutiqueEnfant, safe=False)

def produitEnfant(request, id):
    produit =(ProduitEnfant.objects.filter(id=id).values())
    data = (produit[0])
    return JsonResponse(data, safe=False)

def boutiqueFemme(request):
    boutiqueFemme = list(ProduitFemme.objects.values())
    return JsonResponse(boutiqueFemme, safe=False)

def produitFemme(request, id):
    produitFemme =(ProduitFemme.objects.filter(id=id).values())
    data = (produitFemme[0])
    return JsonResponse(data, safe=False)

def boutiqueHomme(request):
    boutiqueHomme = list(ProduitHomme.objects.values())
    return JsonResponse(boutiqueHomme, safe=False)

def produitHomme(request, id):
    produitHomme =(ProduitHomme.objects.filter(id=id).values())
    data = (produitHomme[0])
    return JsonResponse(data, safe=False)