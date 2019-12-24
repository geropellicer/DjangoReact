from django.urls import path, include
from rest_framework.routers import DefaultRouter
from endpoints.api.views import (rolPersonaViewSet, tipoEventoViewSet, eventoViewSet,
                            personaViewSet, relacionViewSet, tipoAporteViewSet,
                            mesViewSet, aporteViewSet, tipoEstructuraViewSet,
                            zonaViewSet, estructuraViewSet)

router = DefaultRouter()
router.register(r"roles-de-personas", rolPersonaViewSet)
router.register(r"tipos-de-evento", tipoEventoViewSet)
router.register(r"eventos", eventoViewSet)
router.register(r"tipos-de-estructura", tipoEstructuraViewSet)
router.register(r"zonas", zonaViewSet)
router.register(r"estructuras", estructuraViewSet)
router.register(r"personas", personaViewSet)
router.register(r"relaciones", relacionViewSet)
router.register(r"tipos-de-aporte", tipoAporteViewSet)
router.register(r"meses", mesViewSet)
router.register(r"aportes", aporteViewSet)


urlpatterns = [
    path('', include(router.urls)),
]