from django.shortcuts import redirect, render
from .models import Producto
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

# import django get_template and render 
from django.template import loader

# Create your views here.
def index(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'productos': productos})

def registro(request):
    return render(request, 'registroproducto.html')

def catalogo(request):
    productos = Producto.objects.all()
    return render(request, 'catalogo.html', {'productos': productos})

def login(request):
    return render(request, 'login.html')

def registrarProducto(request):
    if request.method == 'POST':
        nombre = request.POST['nombre']
        tipoAmbiente = request.POST['tipoProducto']
        tipoPlanta = request.POST['tipoPlanta']
        fecha = request.POST['fecha']
        temperatura = request.POST['temperatura']
        precio = request.POST['precio']
        stock = request.POST['stock']
        producto = Producto.objects.create(nombre=nombre, precio=precio, stock=stock,tipoAmbiente=tipoAmbiente, tipoPlanta=tipoPlanta, fecha=fecha, temperatura=temperatura)
        return redirect('/catalogo')

def eliminarProducto(request, id):
    producto = Producto.objects.get(id=id)
    producto.delete()
    return redirect('/')

def edicionProducto(request, id):
    producto = Producto.objects.get(id=id)
    return render(request, 'edicionProducto.html', {'producto': producto})

def editarProducto(request):
    if request.method == 'POST':
        id = request.POST['id']
        nombre = request.POST['nombre']
        tipoAmbiente = request.POST['tipoProducto']
        tipoPlanta = request.POST['tipoPlanta']
        fecha = request.POST['fecha']
        temperatura = request.POST['temperatura']
        precio = request.POST['precio']
        stock = request.POST['stock']
        producto = Producto.objects.get(id=id)
        producto.nombre = nombre
        producto.precio = precio
        producto.stock = stock
        producto.tipoAmbiente = tipoAmbiente
        producto.tipoPlanta = tipoPlanta
        producto.fecha = fecha
        producto.temperatura = temperatura
        producto.save()
        return redirect('/catalogo')