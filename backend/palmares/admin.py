from django.contrib import admin

from palmares.models import LigueUn, CoupeDeFrance, CoupeDeLaLigue, TropheesDesChampions, CoupeDesCoupes

# Register your models here.
admin.site.register(LigueUn)
admin.site.register(CoupeDeFrance)
admin.site.register(CoupeDeLaLigue)
admin.site.register(TropheesDesChampions)
admin.site.register(CoupeDesCoupes)
