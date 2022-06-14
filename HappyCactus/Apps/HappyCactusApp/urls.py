from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('registro', views.registro),
    path('catalogo', views.catalogo),
    path('login', views.login),
    path('registrarProducto/',views.registrarProducto),
    path('eliminarProducto/<int:id>', views.eliminarProducto),
    path('edicionProducto/<int:id>', views.edicionProducto),
    path('editarProducto/', views.editarProducto),
]

