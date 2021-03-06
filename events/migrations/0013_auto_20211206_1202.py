# Generated by Django 3.2.9 on 2021-12-06 12:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_alter_category_category'),
        ('venues', '0002_alter_venue_capacity'),
        ('events', '0012_alter_event_finish_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.category'),
        ),
        migrations.AlterField(
            model_name='event',
            name='venue',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='venues.venue'),
        ),
    ]
