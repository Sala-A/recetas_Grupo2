from django.db import models
from receta.models import Receta
from users.models import User

# Create your models here.
class Calificacione(models.Model):
    id_calificacion = models.AutoField(primary_key=True)
    puntuacion = models.IntegerField()
    comentario = models.TextField()
    fecha = models.DateField()
    id_user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True,db_column='id_user')
    id_receta = models.ForeignKey(Receta, on_delete=models.SET_NULL,null=True, db_column='id_receta') 

    class Meta:
        managed = False
        db_table = 'calificacion'
       