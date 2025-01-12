from django.db import models
from ingredientes.models import Ingrediente
from recetas.models import Receta

# Create your models here.

class Dosificar(models.Model):
    id_dosificar = models.AutoField(primary_key=True)
    cantidad = models.FloatField()
    numero_comensales = models.IntegerField()
    id_ingrediente = models.ForeignKey(Ingrediente, models.DO_NOTHING, db_column='id_ingrediente')
    id_receta = models.ForeignKey(Receta, models.DO_NOTHING, db_column='id_receta')
    

    class Meta:
        managed = False
        db_table = 'dosificar'
