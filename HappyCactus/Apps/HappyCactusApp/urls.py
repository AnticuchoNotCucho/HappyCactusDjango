from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('registro/', views.registro, name='registro'),
    path('catalogo/', views.catalogo, name='catalogo'),
    path('login/', views.login),
    path('registrarProducto/',views.registrarProducto),
    path('eliminarProducto/<int:id>', views.eliminarProducto),
    path('edicionProducto/<int:id>', views.edicionProducto),
    path('editarProducto/', views.editarProducto),
    path('inicio/', views.pag_inicio, name='inicio'),
    path('perfil/', views.micuenta, name='perfil'),
    path('registration/', views.registration, name='registration'),
    path('carrito/', views.carrito, name='carrito'),
]

