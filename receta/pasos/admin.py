from django.contrib import admin
from pasos.models import Paso

# Register your models here.

@admin.register(Paso)

class PasoAdmin(admin.ModelAdmin):
    list_display = ['id_pasos', 'descripcion', 'id_receta']

