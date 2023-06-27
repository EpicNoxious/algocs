from django.db import models
import uuid

class Email(models.Model):
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
  email = models.EmailField(max_length=500, blank=True)
  created = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.email)
