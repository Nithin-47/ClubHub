# Generated by Django 4.2.2 on 2023-07-12 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_alter_club_clubname'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='access_level',
            field=models.IntegerField(default=100),
        ),
    ]
