from django.contrib import admin
from endpoints.models import rolPersona
from endpoints.models import tipoEvento
from endpoints.models import evento
from endpoints.models import tipoEstructura
from endpoints.models import zona
from endpoints.models import estructura
from endpoints.models import persona
from endpoints.models import relacion
from endpoints.models import tipoAporte
from endpoints.models import aporte


# Register your models here.
admin.site.register(rolPersona)
admin.site.register(tipoEvento)
admin.site.register(evento)
admin.site.register(tipoEstructura)
admin.site.register(zona)
admin.site.register(estructura)
admin.site.register(persona)
admin.site.register(relacion)
admin.site.register(tipoAporte)
admin.site.register(aporte)