from django.contrib import admin
from dosificar.models import Dosificar

# Register your models here.
@admin.register(Dosificar)

class DosificarAdmin(admin.ModelAdmin):
    list_display = ['id_dosificar', 'cantidad', 'numero_comensales', 'id_ingrediente', 'id_receta']