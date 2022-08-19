import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from order.models import Order

from order.form import OrderForm

@csrf_exempt
def addOrder(request):
    if request.method == "POST":
        order_form = OrderForm(json.loads(request.body))
        print(order_form)
    
        order=Order()
        order.address=order_form.cleaned_data['address']
        order.firstName=order_form.cleaned_data['firstName']
        order.lastName=order_form.cleaned_data['lastName'] 
        order.item = order_form.cleaned_data['item']
        order.price = order_form.cleaned_data['price']
        order.save()
        print(order.item)
    # # return JsonResponse((user.addressMail, user.lastName, user.firstName), safe=False)
    return HttpResponse('ok')
