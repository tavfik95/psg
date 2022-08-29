# Generated by Django 4.0.3 on 2022-08-25 22:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='address',
            field=models.CharField(default='1 rue de paris', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='firstName',
            field=models.CharField(default='Tavfik', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='item',
            field=models.CharField(default='Veste', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='lastName',
            field=models.CharField(default='MOHAMADOUISA', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='mail',
            field=models.CharField(default='tavfik@gmail.com', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.CharField(default='0987654321', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='price',
            field=models.CharField(default='123', max_length=254),
            preserve_default=False,
        ),
    ]
