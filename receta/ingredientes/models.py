from django.db import models
from recetas.models import Receta

# Create your models here.

class Ingrediente(models.Model):
    id_ingredientes = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200)
    id_receta = models.ForeignKey(Receta, models.DO_NOTHING, db_column='id_receta')

    class Meta:
        managed = False
        db_table = 'ingredientes'
