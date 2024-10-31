from rest_framework.permissions import BasePermission

class IsAuthenticatedToCreate(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True
        elif request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
            return request.user.is_authenticated
        return False