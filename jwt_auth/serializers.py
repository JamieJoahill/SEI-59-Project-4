from rest_framework import serializers
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True) # we dont accidently read the db, never taking passwords out
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password') # pw originally looks like: "123"
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password) # encrypts the password 
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation',) # alt to providing all the fields, specifying fields