from django.urls import path, include
from rest_framework.routers import DefaultRouter
from planes.api.views import (estadoPersonaPlanViewSet, personaPlanViewSet, planViewSet)

router = DefaultRouter()
router.register(r"estados-de-personas-en-planes", estadoPersonaPlanViewSet)
router.register(r"personas-en-planes", personaPlanViewSet)
router.register(r"planes", planViewSet)



urlpatterns = [
    path('', include(router.urls)),
]