from rest_framework import serializers
from endpoints.models import (rolPersona, tipoEvento, evento, persona, relacion,
                            tipoAporte, mes, aporte, tipoEstructura, zona, estructura)

class rolPersonaSerializer(serializers.ModelSerializer):

    class Meta:
        model = rolPersona
        fields = "__all__"


class tipoEventoSerializer(serializers.ModelSerializer):

    class Meta:
        model = tipoEvento
        fields = "__all__"


class eventoSerializer(serializers.ModelSerializer):

    class Meta:
        model = evento
        fields = "__all__"


class tipoEstructuraSerializer(serializers.ModelSerializer):

    class Meta:
        model = tipoEstructura
        fields = "__all__"


class zonaSerializer(serializers.ModelSerializer):

    class Meta:
        model = zona
        fields = "__all__"


class estructuraSerializer(serializers.ModelSerializer):

    class Meta:
        model = estructura
        fields = "__all__"


class personaSerializer(serializers.ModelSerializer):

    class Meta:
        model = persona
        fields = "__all__"


class relacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = relacion
        fields = "__all__"


class tipoAporteSerializer(serializers.ModelSerializer):

    class Meta:
        model = aporte
        fields = "__all__"


class mesSerializer(serializers.ModelSerializer):

    class Meta:
        model = mes
        fields = "__all__"


class aporteSerializer(serializers.ModelSerializer):

    class Meta:
        model = aporte
        fields = "__all__"

