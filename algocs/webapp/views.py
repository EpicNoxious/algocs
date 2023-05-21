from django.shortcuts import render


# index view
def indexView(request):
  context= {}
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