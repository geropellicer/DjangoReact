from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
