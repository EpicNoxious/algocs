from django.urls import path
from . import views
urlpatterns = [
  path('', views.indexView, name="index"),
  path('about/', views.aboutView , name="about"),
  path('contact/', views.contactView , name="contact"),
  path('gallery/', views.galleryView , name="gallery"),
  path('partners/', views.partnersView, name='partners'),
  path('privacy/', views.privacyView, name='privacy'),
  path('legal/', views.legalView, name='legal'),
  ]
