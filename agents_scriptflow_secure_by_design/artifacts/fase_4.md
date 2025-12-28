## agent_4.md
- Entrada: agents_scriptflow_secure_by_design/artifacts/fase_3.md
- Salida: agents_scriptflow_secure_by_design/artifacts/fase_4.md
- Confirmacion: si
- Estado: ejecutado

## Experiencia de usuario (F4)

### Objetivo UX
- Guiar al visitante hacia contacto calificado con minima friccion y maxima confianza.

### Flujos principales
- Conversion rapida: Home -> Servicios -> Contacto.
- Confianza: Home -> Sobre mi -> Contacto.
- Prueba social: Home -> Casos -> Contacto.
- Explorar trabajos: Home -> Proyectos -> Contacto.

### Wireframe textual por pagina
- Home
  - Hero con propuesta de valor, CTA principal, CTA secundario.
  - Bloque de servicios destacados con beneficios.
  - Prueba social (testimonios/logos).
  - Metodo de trabajo en 3-4 pasos.
  - CTA final.
- Servicios
  - Lista por disciplina con resultados esperados.
  - Seccion de proceso/entregables.
  - CTA.
- Proyectos
  - Cards con enlaces a trabajos seleccionados.
  - Boton "ver mas" para expandir el listado.
- Sobre mi
  - Historia profesional, stack/credenciales.
  - Diferenciadores (ingenieria + SEO + UX).
  - CTA.
- Casos
  - Cards de caso con problema/solucion/resultado.
  - Metricas anonimizadas.
  - CTA.
- Contacto
  - Formulario simple.
  - Aviso de privacidad en modal y alternativa de contacto directo.

### Microinteracciones
- Hover en CTAs y cards.
- Scroll reveal en secciones clave.
- Feedback en formulario (errores y exito).

### Estados UX seguros
- Errores de formulario: mensajes genericos sin detalles tecnicos.
- Empty states: sugerir acciones claras.
- Confirmacion de envio: mensaje breve y no expone datos.

### Controles UX de seguridad y privacidad
- Consentimiento explicito en formulario (checkbox opcional si aplica).
- Anti-spam discreto (honeypot o captcha ligero).
- Rate limit invisible para usuario legitimo.
- Indicadores de HTTPS/seguridad en footer y modal de privacidad.

### Evidencia verificable
- User flows documentados.
- Wireframe textual validado con objetivos de conversion.
- Estados de error definidos.

## Recomendaciones para agente 5
- Traducir estos flujos en diseño UI con jerarquia clara.
- Mantener CTAs consistentes y visibles.
- Asegurar accesibilidad y legibilidad.
