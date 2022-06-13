from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('registro', views.registro),
    path('catalogo', views.catalogo)]

