from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAuthenticatedAndOwnerOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ["GET", "POST", "DELETE", "PUT"]:
            return True 
  
#----------------------------------------------------------------------------
    
    # def has_permission(self, request, view):
    #     # Permitir ver recetas a todos
    #     if request.method in SAFE_METHODS:
    #         return True
    #     # Solo permite crear, actualizar o eliminar a usuarios autenticados
    #     return request.user.is_authenticated

    # def has_object_permission(self, request, view, obj):
    #     # Permitir ver recetas a todos
    #     if request.method in SAFE_METHODS:
    #         return True
    #     # Solo permite modificar al propietario de la receta
    #     return obj.id_usuario == request.user
