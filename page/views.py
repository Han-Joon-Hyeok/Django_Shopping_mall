from django.shortcuts import render

# Create your views here.

def main(request):
    return render(request, 'main.html')

def category(request):
  return render(request, 'category.html')

def item(request):
  return render(request, 'item.html')

def cart(request):
  return render(request, 'cart.html')

def editInfo(request):
  return render(request, 'edit-info.html')

def wishlist(request):
  return render(request, 'wish-list.html')

def orderList(request):
  return render(request, 'order-list.html')

def register(request):
  return render(request, 'register.html')

def orderDetail(request):
  return render(request, 'order-detail.html')