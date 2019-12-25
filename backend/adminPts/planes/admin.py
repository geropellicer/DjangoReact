from django.contrib import admin
from planes.models import estadoPersonaPlan, personaPlan, plan

# Register your models here.
admin.site.register(estadoPersonaPlan)
admin.site.register(personaPlan)
admin.site.register(plan)