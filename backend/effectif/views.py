from django.http import JsonResponse

from effectif.models import Joueurs



def joueur(request):
    joueur = list(Joueurs.objects.values())
    return JsonResponse(joueur, safe=False)

def ficheJoueur(request, id):
    fiche =(Joueurs.objects.filter(id=id).values())
    data = (fiche[0])
    return JsonResponse(data, safe=False)

