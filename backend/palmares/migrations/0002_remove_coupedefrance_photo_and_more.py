# Generated by Django 4.0.3 on 2022-07-21 19:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('palmares', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coupedefrance',
            name='photo',
        ),
        migrations.RemoveField(
            model_name='coupedelaligue',
            name='photo',
        ),
        migrations.RemoveField(
            model_name='coupedescoupes',
            name='photo',
        ),
        migrations.RemoveField(
            model_name='ligueun',
            name='photo',
        ),
        migrations.RemoveField(
            model_name='tropheesdeschampions',
            name='photo',
        ),
    ]
