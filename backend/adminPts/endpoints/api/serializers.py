from rest_framework import serializers
from endpoints.models import (rolPersona, tipoEvento, evento, persona, relacion,
                            tipoAporte, aporte, tipoEstructura, zona, estructura)



class tipoEventoResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = tipoEvento
        fields = "__all__"


class eventoResumenSerializer(serializers.ModelSerializer):
    tipo = tipoEventoResumenSerializer()
    
    class Meta:
        model = evento
        fields = "__all__"


class tipoEventoSerializer(serializers.ModelSerializer):
    eventos = eventoResumenSerializer(many=True, read_only=True)

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




class estructuraSerializer(serializers.ModelSerializer):
    zona = zonaResumenSerializer()
    tipo = tipoEstructuraResumenSerializer()
    personas = personaResumenSerializer(many=True, read_only=True)

    class Meta:
        model = estructura
        fields = "__all__"

    def create(self, validated_data):
        instanceZona = validated_data.pop('zona')
        instanceTipo = validated_data.pop('tipo')

        zonaNombre = str(list(instanceZona.items())[0][1])
        tipoNombre = str(list(instanceTipo.items())[0][1])

        estructuraNombre = validated_data.pop('nombre')

        zInstance = zona.objects.get(nombre=zonaNombre)
        tInstance = tipoEstructura.objects.get(nombre=tipoNombre)
        nuevaEstructura = estructura.objects.create(nombre=estructuraNombre, zona=zInstance, tipo=tInstance)
        
        return nuevaEstructura


class zonaSerializer(serializers.ModelSerializer):
    estructuras = estructuraSerializer(many=True)

    class Meta:
        model = zona
        fields = "__all__"


class tipoEstructuraSerializer(serializers.ModelSerializer):
    estructuras = estructuraSerializer(many=True, read_only=True)

    class Meta:
        model = tipoEstructura
        fields = "__all__"




class estructuraResumenSerializer(serializers.ModelSerializer):
    zona = zonaResumenSerializer()
    tipo = tipoEstructuraResumenSerializer()

    class Meta:
        model = estructura
        fields = "__all__"

class personaResumenConEstructuraSerializer(serializers.ModelSerializer):
    estructura = estructuraResumenSerializer()

    class Meta:
        model = persona
        fields = "__all__"

class aporteResumenSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = aporte
        fields = "__all__"


class rolPersonaResumenSerializer(serializers.ModelSerializer):

    class Meta:
        model = rolPersona
        fields = "__all__"



class relacionSerializer(serializers.ModelSerializer):
    persona_militante = personaResumenSerializer()
    persona_contacto = personaResumenSerializer()

    class Meta:
        model = relacion
        fields = "__all__"


class personaSerializer(serializers.ModelSerializer):
    eventos = eventoResumenSerializer(many=True)
    estructura = estructuraResumenSerializer()
    rol = rolPersonaResumenSerializer()
    aportes = aporteResumenSerializer(many=True)
    relaciones_propias = relacionSerializer(many=True)
    relacion_de = relacionSerializer(many=True)

    class Meta:
        model = persona
        fields = "__all__"


class eventoSerializer(serializers.ModelSerializer):
    tipo = tipoEventoSerializer()
    personas = personaResumenConEstructuraSerializer(many=True, read_only=True)

    class Meta:
        model = evento
        fields = "__all__"

    def create(self, validated_data):
        nombre = validated_data.pop('nombre')
        fecha = validated_data.pop('fecha')

        instanceTipo = validated_data.pop('tipo')

        tipoNombre = str(list(instanceTipo.items())[0][1])
        
        tInstance = tipoEvento.objects.get(nombre=tipoNombre)
        nuevoEvento = evento.objects.create(nombre=nombre, fecha=fecha, tipo=tInstance)
        
        return nuevoEvento



class aporteResumenSerializer(serializers.ModelSerializer):
    persona = personaResumenSerializer()

    class Meta:
        model = aporte
        fields = "__all__"


class tipoAporteSerializer(serializers.ModelSerializer):
    aportes = aporteResumenSerializer(many=True, read_only=True)

    class Meta:
        model = tipoAporte
        fields = "__all__"




class aporteSerializer(serializers.ModelSerializer):
    tipoAporte = tipoAporteSerializer()
    persona = personaResumenSerializer()

    class Meta:
        model = aporte
        fields = "__all__"

    def create(self, validated_data):
        monto = validated_data.pop('monto')
        fecha = validated_data.pop('fecha')
        instancePersona = validated_data.pop('persona')
        instanceTipo = validated_data.pop('tipoAporte')

        personaNombre = str(list(instancePersona.items())[0][1])
        tipoNombre = str(list(instanceTipo.items())[0][1])

        pInstance = persona.objects.get(nombre=personaNombre)
        taInstance = tipoAporte.objects.get(nombre=tipoNombre)
        nuevoAporte = aporte.objects.create(monto=monto, fecha=fecha, persona=pInstance, tipoAporte=taInstance)
        
        return nuevoAporte


class rolPersonaSerializer(serializers.ModelSerializer):
    personas = personaResumenConEstructuraSerializer(many=True, read_only=True)
    
    class Meta:
        model = rolPersona
        fields = "__all__"