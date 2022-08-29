from django.test import TestCase, Client


class OrderModelTests(TestCase):
    """ Test the controller """
    client = Client()

    def setUp(self):
        """This function 'setUp' settings self.user   
        self.form will be used for all tests"""
        self.form ={
            'address' : '1 rue de paris 75002 Paris',
            'firstName' : 'Tavfik',
            'lastName' : 'MOHAMADOUISA',
            'phone' : '0123456789',
            'email' : 'ts@az.com',  
            'item' : 'veste',
            'price': '123',
        }

    def test_form_succes(self):
        """Test form with all field fill
        When receive a valid form, should return status code 200"""
        
        response = self.client.post(
            "/addOrder/", self.form
        )
        print(self.form)
        self.assertEqual(response.status_code, 200)

    def test_form_error_detail_missing(self):
        """Test form with at least one field empty
        When receive an empty detail, should return 400 error"""

        self.form['price'] =""
        response = self.client.post(
            "/addOrder/", self.form
        )
        print(self.form)
        self.assertEqual(response.status_code, 400)