from django.db import models
from users.models import User
from django.utils.html import format_html

# Create your models here.

class Receta(models.Model):
    id_receta = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=300)
    tiempo_preparacion = models.TimeField()
    categoria = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='recetas/', null=True, blank=True)
    numero_comensales = models.IntegerField()
    id_usuario = models.ForeignKey(User, models.SET_NULL, null=True, db_column='id_usuario')

    class Meta:
        managed = False
        db_table = 'recetas'
        
    
    def mostrar_imagen(self):
        if self.imagen:
            return format_html('<img src="{}" style="width: 50px; height: 50px;"/>'.format(self.imagen.url))
        else:
            return ''
