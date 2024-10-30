from django.contrib import admin
from calificacion.models import Calificacione
# Register your models here.
@admin.register(Calificacione)

class Calificacione(admin.ModelAdmin):
    list_display = ['puntuacion','comentario','fecha'] 

