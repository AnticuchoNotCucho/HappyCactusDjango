from rest_framework import serializers
from Apps.HappyCactusApp.models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('id', 'imagen', 'nombre', 'tipoPlanta', 'tipoAmbiente', 'precio', 'stock', 'fecha', 'temperatura')