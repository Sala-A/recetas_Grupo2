from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAuthenticatedIngredientes(BasePermission):
    def has_permission(self, request, view):
        if request.method in ["GET", "POST", "DELETE", "PUT"]:
            return True 
  