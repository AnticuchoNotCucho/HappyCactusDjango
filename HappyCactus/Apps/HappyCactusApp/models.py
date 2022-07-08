from django.db import models

# Create your models here.

class Producto(models.Model):
    imagen = models.CharField(max_length=100, default='SOME STRING')
    nombre = models.CharField(max_length=50, default='SOME STRING')
    tipoPlanta = models.CharField(max_length=50, default='SOME STRING')
    tipoAmbiente = models.CharField(max_length=50, default='SOME STRING')
    precio = models.IntegerField()
    stock = models.IntegerField()
    fecha = models.DateField(auto_now_add=True, blank=True, auto_now=False)
    temperatura = models.IntegerField()
    link = models.CharField(max_length=100, default='SOME STRING')

    def __str__(self):
        return self.nombre