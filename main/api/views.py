from rest_framework import viewsets

from .serializer import \
    UserSerializer, \
    GroupSerializer, \
    GroupDetailSerializer
    # UserListRetrieveSerializer
from ..models import User, Group


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # action_to_serializer = {
    #     "list": UserListRetrieveSerializer,
    #     "retrieve": UserListRetrieveSerializer
    # }

    # def get_serializer_class(self):
    #     return self.action_to_serializer.get(
    #         self.action,
    #         self.serializer_class
    #     )


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    action_to_serializer = {
        "retrieve": GroupDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )



