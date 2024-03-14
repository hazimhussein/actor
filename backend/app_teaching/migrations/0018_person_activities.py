# Generated by Django 4.2.6 on 2023-11-30 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app_teaching", "0017_personactivity"),
    ]

    operations = [
        migrations.AddField(
            model_name="person",
            name="activities",
            field=models.ManyToManyField(
                related_name="activities", to="app_teaching.position_activity"
            ),
        ),
    ]
