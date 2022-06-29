from django.urls import path
from Apps.rest_planta.views import lista_productos

urlpatterns = [
    path('lista_productos', lista_productos, name='lista_productos')
]