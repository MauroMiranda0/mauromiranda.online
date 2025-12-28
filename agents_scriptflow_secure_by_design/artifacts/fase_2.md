## agent_2.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_1.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_2.md
- Confirmacion: si
- Estado: ejecutado

## Requerimientos funcionales (F2)

### Objetivo del producto
- Portafolio web que convierta visitas en contactos calificados y posicione autoridad tecnica.

### Requerimientos funcionales principales
- Home con propuesta de valor, CTA primario y resumen de servicios.
- Servicios con bloques por disciplina (Dev / SEO / UX / Consultoria / Mantenimiento) y beneficios medibles.
- Sobre mi con narrativa profesional y credenciales.
- Casos de exito con resultados y contexto (sin datos sensibles de clientes).
- Contacto con formulario y alternativas de contacto directo.
- Navegacion clara, estructura jerarquica y anclas/menus para conversion.
- Seccion de prueba social (testimonios o logos) si hay permiso.

### Requerimientos funcionales secundarios
- Actualizacion de contenido via cambios en codigo (sin CMS).
- CTA persistentes en secciones clave.
- Captura de leads con validacion de campos.
- Envio de leads por email (sin panel de administracion).

### Requerimientos no funcionales
- Responsive (mobile-first) y accesible (WCAG AA como meta).
- Rendimiento: carga inicial rapida (LCP < 2.5s objetivo en home).
- SEO on-page: metadatos, estructura semantica, sitemap.
- Confiabilidad: uptime del hosting acorde a servicio.

## Seguridad y privacidad (requisitos)

### Politica de datos
- Minimizacion: solo nombre, email, empresa (opcional) y mensaje.
- Aviso de privacidad visible en formulario.
- Retencion: eliminar leads no calificados despues de 4 meses.

### Controles requeridos
- HTTPS obligatorio y redireccion forzada.
- Proteccion anti-spam en formularios (honeypot o captcha ligero).
- Rate limiting en endpoint de formulario.
- Validacion y sanitizacion del input en servidor.
- Headers de seguridad basicos (CSP, HSTS, X-Content-Type-Options).

### Roles y permisos (conceptual)
- Visitante: acceso a contenido publico.
- Propietario: acceso a leads via email.

## Riesgos relevantes y mitigaciones
- Riesgo: abuso de formulario (spam, inyeccion). Control: captcha/honeypot, rate limit, sanitizacion.
- Riesgo: fuga de datos de contacto. Control: HTTPS, minimizacion, almacenamiento seguro.
- Riesgo: contenido no autorizado. Control: cambios solo via codigo/versionado.

## Trazabilidad requisito -> control -> verificacion
- Formulario de contacto -> validacion/sanitizacion -> prueba de envio con payload malicioso.
- Privacidad de datos -> minimizacion/aviso -> revision de formulario y politica.
- Disponibilidad -> hosting confiable -> verificacion de SLA y monitoreo basico.

## Evidencia verificable (checklist)
- Formulario valida campos y bloquea spam (capturas o logs).
- Sitio fuerza HTTPS y headers configurados.
- Politica de privacidad publicada y enlazada.
- Metadatos SEO basicos presentes en paginas clave.

## Recomendaciones para agente 3
- Convertir requisitos en arquitectura de informacion y flujos.
- Asegurar que los controles de formulario se consideren en UX.
- Definir componentes UI que soporten conversion y confianza.
