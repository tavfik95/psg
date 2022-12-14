from django.forms import ModelForm
from order.models import Order


class OrderForm(ModelForm):
    class Meta: 
        model = Order
        fields = [
            'address',
            'firstName',
            'lastName',
            'mail',
            'phone',
            'item',
            'price',
        ]