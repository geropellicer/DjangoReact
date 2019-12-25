from rest_framework import status
from rest_framework import mixins
from rest_framework import generics
from rest_framework import exceptions
from rest_framework.filters import SearchFilter
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet, GenericViewSet



from planes.models import (estadoPersonaPlan, personaPlan, plan)
from planes.api.serializers import (estadoPersonaPlanSerializer, 
                                    personaPlanSerializer, planSerializer)


class estadoPersonaPlanViewSet(mixins.UpdateModelMixin,
                    mixins.ListModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    GenericViewSet):
    queryset = estadoPersonaPlan.objects.all()
    serializer_class = estadoPersonaPlanSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter]
    search_fields = ['estadoPersonaPlan.nombre']
    

    def perform_create(self, serializer):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()


class personaPlanViewSet(mixins.UpdateModelMixin,
                    mixins.ListModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    GenericViewSet):
    queryset = personaPlan.objects.all()
    serializer_class = personaPlanSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter]
    search_fields = ['personaPlan.persona.nombre']
    

    def perform_create(self, serializer):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()


class planViewSet(mixins.UpdateModelMixin,
                    mixins.ListModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    GenericViewSet):
    queryset = plan.objects.all()
    serializer_class = planSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter]
    search_fields = ['plan.nombre']
    

    def perform_create(self, serializer):
        serializer.save()

    def perform_destroy(self, instance):
        instance.delete()
