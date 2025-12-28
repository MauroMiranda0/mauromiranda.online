## agent_3.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_2.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_3.md
- Confirmacion: si
- Estado: ejecutado

## Arquitectura de informacion (F3)

### Objetivo
- Definir la estructura del sitio, jerarquia de contenidos y rutas con foco en conversion y seguridad.

### Sitemap clasificado
- Publico:
  - / (Home)
  - /servicios
  - /proyectos
  - /sobre-mi
  - /casos-de-exito
  - /contacto

### Jerarquia de navegacion
- Nave principal: Home, Servicios, Sobre mi, Casos, Contacto.
- CTA primario visible en Home y header.
- CTA secundario en Servicios y Casos.

### Estructura por pagina (bloques)
- Home: Hero + Propuesta de valor + Servicios destacados + Prueba social + Proceso/Metodo + CTA.
- Servicios: Cards por disciplina + Beneficios + CTA.
- Proyectos: Cards con enlaces a trabajos seleccionados + CTA secundario.
- Sobre mi: Historia + Credenciales + Diferenciadores + CTA.
- Casos: Lista de casos + Metricas (anonimizadas) + CTA.
- Contacto: Formulario + Datos de contacto + Aviso de privacidad (modal).

### Flujos clave
- Conversion: Home -> Servicios/Casos -> Contacto.
- Confianza: Home -> Sobre mi -> Contacto.

### Pantallas sensibles y proteccion
- /contacto: validacion de inputs, anti-spam.

### Politica de errores
- Paginas 404/500 sin revelar detalles tecnicos.
- Mensajes genericos para fallos de formulario.

### Riesgos y controles
- Exposicion de datos en casos. Control: anonimizar y obtener permiso.
- Abuso de formulario. Control: rate limit + honeypot/captcha.

### Evidencia verificable
- Sitemap con clasificacion de rutas.
- Wireframe basado en jerarquia definida.

## Recomendaciones para agente 4
- Traducir la IA en wireframes y flujos UX.
- Incorporar controles en interfaz de formulario.
- Definir mensajes de error y estados vacios.
