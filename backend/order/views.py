import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from order.models import Order

from order.form import OrderForm

@csrf_exempt
def addOrder(request):
    if request.method == "POST":
        form = OrderForm(request.POST)
        # order_form = OrderForm(json.loads(request.body))
        if form.is_valid():
            print(form)
            order=Order()
            order.address=form.cleaned_data['address']
            order.firstName=form.cleaned_data['firstName']
            order.lastName=form.cleaned_data['lastName'] 
            order.item = form.cleaned_data['item']
            order.price = form.cleaned_data['price']
            order.phone = form.cleaned_data['phone']
            order.mail = form.cleaned_data['mail']
            order.save()
            print(order.item)
    return HttpResponse('ok')
