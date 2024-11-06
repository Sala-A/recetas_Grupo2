# Generated by Django 5.1.2 on 2024-10-23 01:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Calificacion',
            fields=[
                ('id_calificar', models.AutoField(primary_key=True, serialize=False)),
                ('comentario', models.CharField(max_length=200)),
                ('puntuacion', models.IntegerField()),
                ('fecha', models.DateField()),
            ],
            options={
                'db_table': 'calificaciones',
                'managed': False,
            },
        ),
    ]
