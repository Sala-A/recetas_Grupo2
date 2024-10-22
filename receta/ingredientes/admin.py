from django.contrib import admin
from ingredientes.models import Ingrediente

# Register your models here.
@admin.register(Ingrediente)

class IngredientesAdmin(admin.ModelAdmin):
    list_display = ('id_ingredientes', 'nombre', 'id_receta')
