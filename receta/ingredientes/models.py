from django.db import models
from recetas.models import Receta

# Create your models here.

class Ingrediente(models.Model):
    id_ingredientes = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    cantidad = models.FloatField()
    unidad = models.CharField(max_length=10)
    id_receta = models.ForeignKey(Receta,on_delete=models.CASCADE,db_column='id_receta')

    class Meta:
        managed = False
        db_table = 'ingredientes'
    
    def __str__(self):
        return f"{self.nombre} ({self.cantidad} {self.unidad})"
