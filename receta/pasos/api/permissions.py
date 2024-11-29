from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAuthenticatedAndOwnerOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ["GET", "POST", "PUT"]:
            return True 