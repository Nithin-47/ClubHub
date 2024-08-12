from django.contrib import admin
from .models import User, Club, Event

class UserAdmin(admin.ModelAdmin):
    list_display = ('name','email')
    search_fields = ('name','email')

    # def has_delete_permission(self, request, obj=None):
    #     return False

admin.site.register(User,UserAdmin)
admin.site.register(Club)
admin.site.register(Event)