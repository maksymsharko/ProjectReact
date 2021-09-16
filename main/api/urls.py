from rest_framework import routers
from .views import UserViewSet, GroupViewSet

router = routers.SimpleRouter()
router.register('users', UserViewSet, basename='users')
router.register('groups', GroupViewSet, basename='groups')


urlpatterns = []
urlpatterns += router.urls