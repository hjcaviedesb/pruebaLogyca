from rest_framework.serializers import ModelSerializer

from .models import Prime 
from .models import Pair

class PrimeSerializer(ModelSerializer):
    class Meta:
        model = Prime
        fields = (
            'id', 'primes','number'
        )

class PairSerializer(ModelSerializer):
    class Meta:
        model = Pair
        fields = (
            'id', 'pairs','number'
        )