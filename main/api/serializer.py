from rest_framework import serializers
from ..models import Group, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class GroupDetailSerializer(serializers.ModelSerializer):
    users = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = '__all__'

    @staticmethod
    def get_users(obj):
        return UserSerializer(User.objects.filter(group=obj), many=True).data


# class UserListRetrieveSerializer(serializers.ModelSerializer):
#     group = GroupSerializer()
#
#     class Meta:
#         model = User
#         fields = '__all__'


