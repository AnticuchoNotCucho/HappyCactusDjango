from django.db import models

# Create your models here.

class Producto(models.Model):
    id = models.CharField(primary_key=True, max_length=10) # PK
    imagen = models.CharField(max_length=100, default='SOME STRING')
    link = models.CharField(max_length=100, default='SOME STRING')
    nombre = models.CharField(max_length=50, default='SOME STRING')
    tipoPlanta = models.CharField(max_length=50, default='SOME STRING')
    tipoAmbiente = models.CharField(max_length=50, default='SOME STRING')
    precio = models.IntegerField()

    def __str__(self):
        return self.nombre