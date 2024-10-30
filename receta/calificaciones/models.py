from django.db import models
from users.models import User
from recetas.models import Receta

# Create your models here.

class Calificacion(models.Model):
    id_calificar = models.AutoField(primary_key=True)
    comentario = models.CharField(max_length=200)
    puntuacion = models.IntegerField()
    fecha = models.DateField()
    id_usuario = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, db_column='id_usuario')
    id_receta = models.ForeignKey(Receta, models.DO_NOTHING, db_column='id_receta')

    class Meta:
        managed = False
        db_table = 'calificaciones'