from .models import Email
from django.forms import ModelForm

class EmailForm(ModelForm):
  class Meta:
    model = Email
    fields = ('email',)

  def __init__(self, *args, **kwargs):
    super(EmailForm, self).__init__(*args, **kwargs)
    self.fields['email'].widget.attrs['class'] = 'input--email'
    self.fields['email'].widget.attrs['autocomplete'] = 'false'
    self.fields['email'].widget.attrs['name'] = 'hidden'
    self.fields['email'].widget.attrs['placeholder'] = 'your.mail@email.com'
    
    for name, field in self.fields.items():
      field.widget.attrs.update({'class': 'input'})