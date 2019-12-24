from rest_framework import serializers
from endpoints.models import (rolPersona, tipoEvento, evento, persona, relacion,
                            tipoAporte, mes, aporte, tipoEstructura, zona, estructura)



class tipoEventoSerializer(serializers.ModelSerializer):

    class Meta:
        model = tipoEvento
        fields = "__all__"




class tipoEstructuraResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = tipoEstructura
        fields = "__all__"


class zonaResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = zona
        fields = "__all__"


class personaResumenSerializer(serializers.ModelSerializer):
    class Meta:
        model = persona
        fields = "__all__"


class rolPersonaSerializer(serializers.ModelSerializer):
    personas = personaResumenSerializer()
    class Meta:
        model = rolPersona
        fields = "__all__"


class estructuraSerializer(serializers.ModelSerializer):
    zona = zonaResumenSerializer()
    tipo = tipoEstructuraResumenSerializer()
    personas = personaResumenSerializer(many=True)

    class Meta:
        model = estructura
        fields = "__all__"


class zonaSerializer(serializers.ModelSerializer):
    estructuras = estructuraSerializer(many=True)

    class Meta:
        model = zona
        fields = "__all__"


class tipoEstructuraSerializer(serializers.ModelSerializer):
    estructuras = estructuraSerializer(many=True)

    class Meta:
        model = tipoEstructura
        fields = "__all__"


class eventoResumenSerializer(serializers.ModelSerializer):
    tipo = tipoEventoSerializer()
    
    class Meta:
        model = evento
        fields = "__all__"


class estructuraResumenSerializer(serializers.ModelSerializer):
    zona = zonaResumenSerializer()
    tipo = tipoEstructuraResumenSerializer()

    class Meta:
        model = estructura
        fields = "__all__"


class aporteResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = aporte
        fields = "__all__"


class rolPersonaResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = rolPersona
        fields = "__all__"


class personaSerializer(serializers.ModelSerializer):
    eventos = eventoResumenSerializer(many=True)
    estructura = estructuraResumenSerializer()
    rol = rolPersonaResumenSerializer()
    aportes = aporteResumenSerializer(many=True)
    relaciones_propias = personaResumenSerializer(many=True)
    relacion_de = personaResumenSerializer(many=True)

    class Meta:
        model = persona
        fields = "__all__"


class eventoSerializer(serializers.ModelSerializer):
    tipo = tipoEventoSerializer()
    personas = personaSerializer(many=True)

    class Meta:
        model = evento
        fields = "__all__"



class relacionSerializer(serializers.ModelSerializer):
    persona_militante = personaResumenSerializer()
    persona_contacto = personaResumenSerializer()

    class Meta:
        model = relacion
        fields = "__all__"


class aporteResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = aporte
        fields = "__all__"


class tipoAporteSerializer(serializers.ModelSerializer):
    aportes = aporteResumenSerializer(many=True)

    class Meta:
        model = aporte
        fields = "__all__"


class mesSerializer(serializers.ModelSerializer):

    class Meta:
        model = mes
        fields = "__all__"


class aporteSerializer(serializers.ModelSerializer):
    tipoAporte = tipoAporteSerializer()
    mes = mesSerializer()
    persona = personaResumenSerializer()

    class Meta:
        model = aporte
        fields = "__all__"

