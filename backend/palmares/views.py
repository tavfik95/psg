from django.http import JsonResponse
from django.shortcuts import render

from palmares.models import CoupeDeFrance, CoupeDeLaLigue, CoupeDesCoupes, LigueUn, TropheesDesChampions

def ligueUn(request):
    ligueUn = list(LigueUn.objects.values())
    return JsonResponse(ligueUn, safe=False)

def coupeDeFrance(request):
    coupeDeFrance = list(CoupeDeFrance.objects.values())
    return JsonResponse(coupeDeFrance, safe=False)

def coupeDeLaLigue(request):
    coupeDeLaLigue = list(CoupeDeLaLigue.objects.values())
    return JsonResponse(coupeDeLaLigue, safe=False)

def tropheesDesChampions(request):
    tropheesDesChampions = list(TropheesDesChampions.objects.values())
    return JsonResponse(tropheesDesChampions, safe=False)

def coupeDesCoupes(request):
    coupeDesCoupes = list(CoupeDesCoupes.objects.values())
    return JsonResponse(coupeDesCoupes, safe=False)
