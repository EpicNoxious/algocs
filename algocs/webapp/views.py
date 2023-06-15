from django.shortcuts import render
from .forms import EmailForm

# index view
def indexView(request):
  form = EmailForm()
  if request.method == 'POST':
    form = EmailForm(data=request.POST)
    if form.is_valid():
      print(form.data)
      form.save()
  context= {'form': form}
  return render(request, 'index.html', context)

# about view
def aboutView(request):
  context= {}
  return render(request, 'about.html', context)

# contact view
def contactView(request):
  context= {}
  return render(request, 'contact.html', context)

# gallery view
def galleryView(request):
  context= {}
  return render(request, 'gallery.html', context)

# partners view
def partnersView(request):
  context= {}
  return render(request, 'partners.html', context)

# privacy view
def privacyView(request):
  context= {}
  return render(request, 'privacy.html', context)

# legal view
def legalView(request):
  context= {}
  return render(request, 'legal.html', context)