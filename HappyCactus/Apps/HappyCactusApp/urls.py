from django.urls import path
from django.contrib.auth.decorators import login_required

from . import views

urlpatterns = [
    path('', views.pag_inicio),
    path('perfil/administrar/registro', login_required(views.registro), name='registro'),
    path('catalogo/', views.catalogo, name='catalogo'),
    path('registrarProducto/',login_required(views.registrarProducto)),
    path('eliminarProducto/<int:id>', login_required(views.eliminarProducto)),
    path('edicionProducto/<int:id>', login_required(views.edicionProducto)),
    path('editarProducto/', login_required(views.editarProducto)),
    path('inicio/', views.pag_inicio, name='inicio'),
    path('perfil/', login_required(views.micuenta), name='perfil'),
    path('registration/', views.registration, name='registration'),
    path('carrito/', views.carrito, name='carrito'),
    path('catalogo/paginaEucaliptus.html', views.pag_eucaliptus, name='paginaEucaliptus'),
    path('catalogo/paginaEnredadera.html', views.pag_enredadera, name='paginaEnredadera'),
    path('catalogo/paginaFicus.html', views.pag_ficus, name='paginaFicus'),
    path('perfil/administrar/', views.index , name='index')
    
]

