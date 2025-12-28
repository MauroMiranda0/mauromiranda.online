## agent_7.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_6.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_7.md
- Confirmacion: si
- Estado: ejecutado

## Modelado de datos (F7)

### Objetivo
- Definir datos minimos para el formulario/contacto y contenido publico.

### Entidades y campos (minimos)
- LeadContacto (payload de envio)
  - nombre
  - email
  - empresa (opcional)
  - mensaje
  - origen (pagina/CTA)
  - created_at

- CasoExito (contenido publico)
  - id
  - titulo
  - problema
  - solucion
  - resultado (metricas anonimizadas)
  - sector (opcional)
  - created_at

- Servicio (contenido publico)
  - id
  - nombre
  - descripcion
  - beneficios
  - orden

- Proyecto (contenido publico)
  - id
  - titulo
  - descripcion
  - enlace
  - orden

### Persistencia
- Contenido publico estatico (sin base de datos).
- Leads se envian por email via Formspree.

### Clasificacion de datos
- PII: LeadContacto.nombre, LeadContacto.email, LeadContacto.empresa
- Sensible: LeadContacto.mensaje (puede incluir datos de negocio)
- Publico: CasoExito, Servicio, Proyecto

### Politica de retencion
- Emails no calificados: eliminar/anonimizar despues de 4 meses.
- Emails calificados: retencion segun necesidad comercial (definir).

### Controles de acceso
- Propietario: acceso a leads via email.

### Cifrado y privacidad
- En transito: TLS obligatorio.
- En reposo: depende del proveedor de email (cifrado si aplica).

### Riesgos y mitigaciones
- Recoleccion excesiva de datos. Control: minimizacion estricta.
- Exposicion de mensajes. Control: acceso limitado y buenas practicas de correo.

### Evidencia verificable
- Diccionario de datos con clasificacion.
- Politica de retencion documentada.
- Checklist de minimizacion.

## Recomendaciones para agente 8
- Definir endpoint de envio por email y validaciones.
