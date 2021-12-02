from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model # built in user model
from django.conf import settings # for the secret key
import jwt # <------- importing the jwt library
User = get_user_model() # grabs the default user model

class JWTAuthentication(BasicAuthentication):
    def authenticate(self, request):
        header = request.headers.get('Authorization') # looking inside headers for auth
        if not header:
            return None
        if header.startswith('Basic'): # Add this line in
            return None
        if not header.startswith('Bearer'): # if we do not find bearer
            raise PermissionDenied({'message': 'Invalid authorization header'})
            # raise is like throw in JS
        token = header.replace('Bearer ', '')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({'message': 'Invalid Token'})
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found'})
        return (user, token) # request.user <--- if exists, we have a user
