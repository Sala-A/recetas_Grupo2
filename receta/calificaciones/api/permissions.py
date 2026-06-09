from rest_framework.permissions import BasePermission

class IsAuthenticatedToCreate(BasePermission):
    def has_permission(self, request, view):
from rest_framework.permissions import BasePermission
        if request.method == 'GET'or request.method=='POST' or request.method=='DELETE' or request.method=='PUT':
            return True
        elif request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
            return request.user.is_authenticated
        return False
