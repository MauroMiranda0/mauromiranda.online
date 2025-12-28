## agent_10.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_9.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_10.md
- Confirmacion: si
- Estado: ejecutado

## Calidad y pruebas (F10)

### Objetivo
- Definir estrategia de QA y pruebas de seguridad para el sitio.

### Plan de pruebas funcionales
- Navegacion entre secciones y enlaces.
- Validacion de formulario (campos requeridos y formato email).
- Envio correcto de formulario y mensajes de estado.

### Pruebas no funcionales
- Responsive en mobile/tablet/desktop.
- Performance basica (LCP, CLS).
- Accesibilidad (contraste, focus, labels).

### Pruebas de seguridad
- Casos negativos en /api/contacto (payloads maliciosos).
- Rate limit y anti-spam funcionando.
- Verificacion de headers de seguridad.
- Revisar ausencia de PII en logs del cliente.

### Trazabilidad requisito-control-prueba
- Formulario seguro -> validacion + rate limit -> pruebas de abuso.
- Privacidad -> minimizacion + aviso -> revision de formulario.
- Integridad de contenido -> control acceso -> prueba de edicion (si aplica).

### Criterios de salida
- 0 defectos criticos.
- Formularios pasan validaciones.
- Headers de seguridad configurados.
- Accesibilidad minima AA en textos clave.

### Evidencia verificable
- Checklist de pruebas completada.
- Reporte de issues con severidad.

## Recomendaciones para agente 11
- Definir despliegue y hardening final.
- Establecer monitoreo basico post-lanzamiento.
