# Generated by Django 4.0.3 on 2022-07-29 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boutique', '0004_produitenfant_enfant_produitenfant_femme_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produitenfant',
            name='enfant',
        ),
        migrations.RemoveField(
            model_name='produitenfant',
            name='femme',
        ),
        migrations.RemoveField(
            model_name='produitenfant',
            name='homme',
        ),
        migrations.RemoveField(
            model_name='produitfemme',
            name='enfant',
        ),
        migrations.RemoveField(
            model_name='produitfemme',
            name='femme',
        ),
        migrations.RemoveField(
            model_name='produitfemme',
            name='homme',
        ),
        migrations.RemoveField(
            model_name='produithomme',
            name='enfant',
        ),
        migrations.RemoveField(
            model_name='produithomme',
            name='femme',
        ),
        migrations.RemoveField(
            model_name='produithomme',
            name='homme',
        ),
        migrations.AddField(
            model_name='produitenfant',
            name='categorie',
            field=models.CharField(default=' ', max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='produitfemme',
            name='categorie',
            field=models.CharField(default=' ', max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='produithomme',
            name='categorie',
            field=models.CharField(default=' ', max_length=10),
            preserve_default=False,
        ),
    ]
