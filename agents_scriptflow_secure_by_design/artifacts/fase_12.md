## agent_12.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_11.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_12.md
- Confirmacion: si
- Estado: ejecutado

## Deploy (F12)

### Objetivo
- Preparar despliegue seguro y estable del sitio.

### Pipeline y despliegue
- CI/CD con permisos minimos.
- Secrets gestionados en entorno seguro.
- Build reproducible con lockfile.

### Hardening
- TLS/HTTPS forzado.
- Headers de seguridad definidos.
- CSP validado con recursos necesarios.
- Formspree con dominios autorizados y notificaciones activas.

### Checklist de release
- Pruebas de QA y seguridad aprobadas.
- Rollback definido.

### Monitoreo inicial
- Uptime basico.
- Alertas de errores en formulario.

### Evidencia verificable
- Checklist de release firmado.
- Configuracion de pipeline documentada.

## Recomendaciones para agente 13
- Definir observabilidad y metricas post-lanzamiento.
- Establecer mantenimiento y actualizaciones.
