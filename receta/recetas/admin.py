from django.contrib import admin
from recetas.models import Receta

# Register your models here.
@admin.register(Receta)

class RecetasAdmin(admin.ModelAdmin):
    list_display = ('id_receta', 'nombre', 'descripcion', 'tiempo_preparacion', 'categoria', 'mostrar_imagen', 'numero_comensales', 'id_usuario')