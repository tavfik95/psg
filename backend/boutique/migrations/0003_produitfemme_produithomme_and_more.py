# Generated by Django 4.0.3 on 2022-07-28 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boutique', '0002_produit_delete_boutique'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProduitFemme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photoUrl', models.CharField(max_length=254)),
                ('price', models.CharField(max_length=254)),
                ('shortDescription', models.CharField(max_length=254)),
                ('description', models.TextField()),
                ('details', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ProduitHomme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photoUrl', models.CharField(max_length=254)),
                ('price', models.CharField(max_length=254)),
                ('shortDescription', models.CharField(max_length=254)),
                ('description', models.TextField()),
                ('details', models.TextField()),
            ],
        ),
        migrations.RenameModel(
            old_name='Produit',
            new_name='ProduitEnfant',
        ),
    ]
