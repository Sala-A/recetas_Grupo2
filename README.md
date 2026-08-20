# SazónApp

Proyecto desarrollado para el bootcamp *TalentoTech* usando tecnologias como Django y React.

## 1. Configuración del Backend (Django)

### Crear Nuevo Entorno (Si Es Necesario)
```
# Con uv (Recomendado)
uv venv backend/.venv

# Con Python
python -m venv backend/.venv
```

### Activar Entorno
```
# En Linux / macOS / Git Bash:
source ./backend/.venv/bin/activate

# En Windows (PowerShell / CMD):
.\backend\.venv\Scripts\activate
```

### Instalar Dependencias
```
cd ./backend/

# Con uv (Recomendado)
uv pip sync ../requirements.txt

# Con Python
pip install -r ../requirements.txt
```

### Levantar el proyecto
```
python manage.py runserver
```

## 2. Configuración del Frontend (Client)

### Instalar Dependencias

```
cd ../client

# Con Bun (Recomendado)
bun install

# Con npm
npm install
```

### Levantar el proyecto
```
# Con Bun (Recomendado)
bun dev

# Con npm
npm run dev
```

## 3. Credenciales del Administrador
- Correo: advs045049@gmail.com
- Usuario: Grupo2
- Contraseña: recetas123
