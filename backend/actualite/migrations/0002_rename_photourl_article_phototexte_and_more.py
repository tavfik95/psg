# Generated by Django 4.0.3 on 2022-07-19 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actualite', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='photoUrl',
            new_name='photoTexte',
        ),
        migrations.AddField(
            model_name='article',
            name='photoTitle',
            field=models.CharField(default=' ', max_length=254),
            preserve_default=False,
        ),
    ]
