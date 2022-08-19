import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from newsletter.models import User

from newsletter.form import UserForm

@csrf_exempt
def addAddress(request):
    if request.method == "POST":
        user_form = UserForm(json.loads(request.body))
        print(user_form)
        user=User()
        print(user)
        user.address=user_form.cleaned_data['address']
        user.firstName=user_form.cleaned_data['firstName']
        user.lastName=user_form.cleaned_data['lastName']
        user.save()
        print(user)
    # return JsonResponse((user.addressMail, user.lastName, user.firstName), safe=False)
    return HttpResponse('ok')
