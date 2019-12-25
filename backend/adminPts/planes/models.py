from django.db import models

from endpoints.models import persona, evento


class estadoPersonaPlan(models.Model):
    nombre = models.CharField(max_length=50)
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now=True)
    # personas_planes
    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name_plural = "estados de persona en plan"


class personaPlan(models.Model):
    persona = models.ForeignKey(persona, on_delete=models.CASCADE, related_name="personas_planes")
    estado = models.ForeignKey(estadoPersonaPlan, on_delete=models.CASCADE, related_name="personas_planes")
    fue = models.BooleanField(null=True)
    # planes
    def __str__(self):
        return self.persona.nombre

    class Meta:
        verbose_name_plural = "personas en plan"


class plan(models.Model):
    personas = models.ManyToManyField(personaPlan, related_name="planes")
    evento = models.ForeignKey(evento, on_delete=models.CASCADE, related_name="planes")
    def __str__(self):
        return "Plan #" + self.id + " para " + self.evento.nombre

    class Meta:
        verbose_name_plural = "planes"