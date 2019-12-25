from rest_framework import serializers
from planes.models import (estadoPersonaPlan, personaPlan, plan)
from endpoints.api.serializers import personaSerializer, eventoSerializer

class personaPlanResumenSerializer(serializers.ModelSerializer):
    persona = personaSerializer()

    class Meta:
        model = personaPlan
        fields = "__all__"


class estadoPersonaPlanSerializer(serializers.ModelSerializer):
    personas_planes = personaPlanResumenSerializer(many=True)

    class Meta:
        model = estadoPersonaPlan
        fields = "__all__"

class estadoPersonaPlanResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = estadoPersonaPlan
        fields = "__all__"


class planResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = plan
        fields = "__all__"

class personaPlanSerializer(serializers.ModelSerializer):
    persona = personaSerializer()
    estado = estadoPersonaPlanResumenSerializer()
    planes = planResumenSerializer(many=True)

    class Meta:
        model = personaPlan
        fields = "__all__"


class planSerializer(serializers.ModelSerializer):
    personas = personaPlanResumenSerializer(many=True)
    evento = eventoSerializer()

    class Meta:
        model = plan
        fields = "__all__"