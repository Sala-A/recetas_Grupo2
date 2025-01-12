from django.db import models
from recetas.models import Receta

# Create your models here.

class Paso(models.Model):
    id_pasos = models.AutoField(primary_key=True)
    descripcion = models.TextField(max_length=1000)
    id_receta = models.ForeignKey(Receta, models.DO_NOTHING, db_column='id_receta')

    class Meta:
        managed = False
        db_table = 'pasos'
