# Generated by Django 4.0.3 on 2022-07-21 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('palmares', '0002_remove_coupedefrance_photo_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='coupedefrance',
            old_name='scrore',
            new_name='score',
        ),
        migrations.RenameField(
            model_name='coupedelaligue',
            old_name='scrore',
            new_name='score',
        ),
        migrations.RenameField(
            model_name='coupedescoupes',
            old_name='scrore',
            new_name='score',
        ),
        migrations.RemoveField(
            model_name='tropheesdeschampions',
            name='scrore',
        ),
        migrations.AddField(
            model_name='tropheesdeschampions',
            name='score',
            field=models.CharField(default='1/0', max_length=15),
            preserve_default=False,
        ),
    ]
