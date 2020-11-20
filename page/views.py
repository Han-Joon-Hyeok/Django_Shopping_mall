from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponseRedirect
from .models import Product

# Create your views here.

def main(request):
    return render(request, 'main.html')

def category(request):
    itemList = Product.objects.all()
    return render(request, 'category.html', {'itemList':itemList})

def newItem(request):
    if request.method == 'POST':
        item = Product()
        item.user = request.user
        item.prdName = request.POST['name']
        item.content = request.POST['content']
        item.price = request.POST['price']
        item.discount = request.POST['discount']
        item.save()
        return redirect('category')
        # item.notice_file = request.FILES.get('itemImg',None)
        # item.save()
        
        # detail 로 넘어가는거
    else:
        return render(request,'newItem.html')
