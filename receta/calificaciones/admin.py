from django.contrib import admin
from calificaciones.models import Calificacion

# Register your models here.

@admin.register(Calificacion)

class CalificacionAdmin(admin.ModelAdmin):
    list_display = ['id_calificar', 'comentario', 'puntuacion', 'fecha', 'id_usuario', 'id_receta']