from pyexpat.errors import messages
from django.shortcuts import redirect, render
from .models import Producto
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth.decorators import permission_required
# import django get_template and render 
from django.template import loader

# Create your views here.
@permission_required('Apps.HappyCactusApp.can_add_producto')
def index(request):
    productos = Producto.objects.all()
    return render(request, 'index.html', {'productos': productos})
@permission_required('Apps.HappyCactusApp.can_add_producto')
def registro(request):
    return render(request, 'registroproducto.html')

def catalogo(request):
    productos = Producto.objects.all()
    return render(request, 'catalogo.html', {'productos': productos})

@permission_required('Apps.HappyCactusApp.can_add_producto')
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
        return redirect('/')
    
@permission_required('Apps.HappyCactusApp.can_add_producto')
def eliminarProducto(request, id):
    producto = Producto.objects.get(id=id)
    producto.delete()
    return redirect('/')

@permission_required('Apps.HappyCactusApp.can_add_producto')
def edicionProducto(request, id):
    producto = Producto.objects.get(id=id)
    return render(request, 'edicionProducto.html', {'producto': producto})
@permission_required('Apps.HappyCactusApp.can_add_producto')
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
        return redirect('/')

def micuenta(request):
    current_user = request.user
    return render(request, 'micuenta.html', {'current_user': current_user})

def carrito(request):
    return render(request, 'carrito.html')

def registration(request):
    data = {
        'form': CustomUserCreationForm()
    }
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            auth_login(request, user)
            return redirect(to='/')
    return render(request, 'registration/registration.html', data)

def pag_inicio(request):
    return render(request, 'pag_inicio.html')

def pag_eucaliptus(request):
    return render(request, 'paginaEucaliptus.html')

def pag_enredadera(request):
    return render(request, 'paginaEnredadera.html')

def pag_ficus(request):
    return render(request, 'paginaFicus.html')