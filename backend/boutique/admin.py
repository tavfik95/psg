from django.contrib import admin

from boutique.models import ProduitEnfant, ProduitFemme, ProduitHomme

admin.site.register(ProduitEnfant),
admin.site.register(ProduitFemme),
admin.site.register(ProduitHomme),

