from django.forms import ModelForm
from newsletter.models import User


class UserForm(ModelForm):
    class Meta: 
        model = User
        fields = [
            'address',
            'firstName',
            'lastName'
        ]