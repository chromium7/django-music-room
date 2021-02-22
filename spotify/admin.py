from django.contrib import admin

from .models import SpotifyToken

# Register your models here.
@admin.register(SpotifyToken)
class SpotifyTokenAdmin(admin.ModelAdmin):
    pass