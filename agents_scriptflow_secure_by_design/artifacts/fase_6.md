## agent_6.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_5.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_6.md
- Confirmacion: si
- Estado: ejecutado

## Arquitectura tecnica (F6)

### Objetivo
- Definir la arquitectura tecnica del portafolio con controles de seguridad integrados.

### Propuesta tecnica (baseline)
- Landing page estatica (HTML/CSS/JS o generador estatico).
- Hosting con CDN y HTTPS (Vercel/Netlify u equivalente).
- Formulario gestionado por Formspree (entrega por email).
- Analitica basica con enfoque en privacidad.

### Componentes y fronteras de confianza
- Cliente (browser) -> sitio publico (CDN/hosting).
- Sitio publico -> Formspree -> email.

### Dependencias externas
- Hosting/CDN.
- Formspree para envio de email.
- Analitica (si se incorpora).

### Seguridad por componente
- CDN/hosting: HTTPS forzado, HSTS, headers de seguridad.
- Formulario: validacion/sanitizacion y rate limit gestionados por Formspree, honeypot/captcha.

### Gestion de secretos
- Llaves de email/API en entorno seguro (variables de entorno o vault).
- No exponer credenciales en cliente.

### Logging y monitoreo
- Logs basicos de envios (sin PII sensible).
- Alertas por volumen anormal en formularios.

### Riesgos y mitigaciones
- Dependencia de terceros: evaluar politicas y disponibilidad.
- Exposicion de PII: minimizacion y retencion definida.
- Ataques a formulario: rate limit y validacion robusta.

### Evidencia verificable
- Diagrama de arquitectura simple con fronteras.
- Lista de dependencias con justificacion.
- Checklist de seguridad de hosting y formulario.

## Recomendaciones para agente 7
- Detallar stack final y herramientas.
- Definir configuracion de despliegue segura.
