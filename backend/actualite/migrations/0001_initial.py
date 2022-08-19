# Generated by Django 4.0.3 on 2022-07-19 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photoUrl', models.CharField(max_length=254)),
                ('title', models.CharField(max_length=254)),
                ('shortDescription', models.CharField(max_length=254)),
                ('text', models.TextField()),
            ],
        ),
    ]
