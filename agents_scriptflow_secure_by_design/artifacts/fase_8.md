## agent_8.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_7.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_8.md
- Confirmacion: si
- Estado: ejecutado

## Backend (F8)

### Objetivo
- Definir endpoint minimo para captacion de leads via email.

### Endpoints propuestos
- POST /api/contacto
  - Entrada: nombre, email, empresa (opcional), mensaje, origen
  - Validaciones: formato email, longitud maxima, sanitizacion
  - Controles: rate limit, honeypot/captcha, CSRF si aplica
  - Accion: envio de email al propietario
  - Respuesta: 200 ok con mensaje generico

### Politicas de seguridad
- CORS restringido a dominio oficial.
- Limites de payload para evitar abuso.
- Logs con redaccion de PII.
- Errores genericos sin detalles internos.

### Manejo de datos
- No persistir leads en DB; solo envio por email.
- Retencion segun politica definida en F7.

### Riesgos y mitigaciones
- Spam en /api/contacto: rate limit + honeypot/captcha.
- Inyeccion: validacion y sanitizacion estricta.
- Exfiltracion: no exponer endpoints de leads.

### Evidencia verificable
- Especificacion de endpoints.
- Contratos de validacion documentados.
- Checklist de seguridad para API.

## Recomendaciones para agente 9
- Definir integracion frontend-backend y manejo de errores.
- Establecer pruebas basicas de endpoints.
