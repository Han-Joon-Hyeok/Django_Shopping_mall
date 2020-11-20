from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('category', views.category, name="category"),
    path('category/newItem', views.newItem, name="newItem"),
]