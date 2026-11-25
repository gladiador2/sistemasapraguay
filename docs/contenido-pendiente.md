# Contenido pendiente · qué es real y qué hay que reemplazar

El sitio se armó con la información del sitio anterior y se completó con **contenido de ejemplo** para que se vea terminado.
Esta lista dice qué es inventado y dónde está.

> ⚠️ **Importante:** GitHub Pages publica automáticamente todo lo que se sube a la rama `main`.
> Antes de subir, reemplazá o eliminá al menos lo de la sección 🔴. Publicar testimonios, casos o personas inventadas como si fueran reales puede engañar a los clientes.

**Truco para encontrar todo:** buscá `[EJEMPLO]` y `[PENDIENTE]` en los archivos `.html`. Cada bloque inventado tiene un comentario así encima.

---

## Lo que ya es real

- Nombre de la empresa y dominio `sistemasparaguay.com.py`.
- Ubicación en San Juan Nepomuceno, departamento de Caazapá, con este [mapa](https://maps.app.goo.gl/9hSEquqGpwsc173g7). En Google Maps, ese lugar figura como “FULL INFORMÁTICA & CCTV”, no como Sistemas Paraguay.
- Correo `comercial@sistemasparaguay.com.py`.
- WhatsApp **+595 984 935 082**.
- Servicios: apps móviles, páginas web, ecommerce y SaaS.
- **Facturación electrónica, hoy Factura Pya'e:** integración con SIFEN y sus seis funciones. Son comunicación con SIFEN, envío y recepción de documentos, panel en tiempo real, respaldos automáticos, multiempresa y sucursales, y soporte 24/7. En el sitio anterior se llamaba Fénix.
- **Punto de venta, hoy Ñañemu POS:** gratis, con punto de venta, inventario, compras, ventas, reportes, clientes y la posibilidad de pasar a facturación electrónica. En el sitio anterior se llamaba Tu Primer Sistema.
- Números: +500 clientes activos, 98 % de satisfacción, +5 años de experiencia y soporte 24/7. Conviene confirmarlos igual.
- Horario de lunes a viernes, de 8:00 a 18:00.

---

## 🔴 Reemplazar o quitar antes de publicar

| Qué | Dónde | Detalle |
|---|---|---|
| Testimonios | `index.html` | Laura Benítez, Diego Fernández y Rosa Giménez son inventados. Usá testimonios reales, con permiso del cliente, o quitá la sección. |
| Casos de éxito | `servicios.html` | Los tres proyectos y sus resultados (−60 %, ×3 y −45 %) son inventados. |
| Equipo | `nosotros.html` | Las seis personas son inventadas. Reemplazá nombres, cargos y descripciones, y si querés, poné fotos en lugar de las iniciales. |
| Historia y línea de tiempo | `nosotros.html` | Los años 2019, 2020, 2022, 2024 y 2026, y el relato de cómo nació la empresa. Ahora dice que nació en San Juan Nepomuceno, para coincidir con la ubicación real, pero el relato sigue siendo inventado. |
| Instalador de Ñañemu POS | `nanemu-pos.html` | El botón apunta a `descargas/nanemu-pos-setup.exe`, que no existe. El instalador anterior tampoco estaba en el repositorio. GitHub no acepta archivos de más de 100 MB en el repositorio, así que conviene subirlo a **GitHub Releases** y cambiar el enlace. |
| Karu Restaurante | `karu-restaurante.html` | Es un sistema nuevo y toda su página es de ejemplo: funciones, pasos, preguntas frecuentes y maqueta. Si todavía no existe, quitalo del menú, del pie y del inicio, o presentalo como “próximamente”. |
| Política de privacidad | `privacidad.html` | Es un texto modelo. Pedí que la revise un profesional. |

---

## 🟡 Confirmar (inventado, pero plausible)

**Atención y plazos**

- [ ] Atención en guaraní y jopará (valor “Cercanía” en `nosotros.html`).
- [ ] Horario de los sábados, de 8:00 a 12:00 (`contacto.html`).
- [ ] Tiempos de respuesta: “el mismo día hábil”, “en 48 horas hábiles” y “menos de 24 horas hábiles”.
- [ ] Atención presencial con cita previa en San Juan Nepomuceno.
- [ ] Plazos estimados de cada servicio (`servicios.html`).
- [ ] Lista de tecnologías que usa el equipo (`servicios.html`).
- [ ] Preguntas frecuentes del inicio: período de garantía, propiedad del código y presupuesto por etapas.

**Nombres de los sistemas**

- [ ] Traducciones del guaraní que muestra el sitio: *pya'e* es “rápido”, *ñañemu* es “vendemos” y *karu* es “comer”. La de *ñañemu* conviene confirmarla con alguien que hable guaraní.
- [ ] Ñañemu POS hereda los datos de Tu Primer Sistema: gratis y para Windows. Si el nuevo punto de venta no es gratis, cambiá la etiqueta “Gratis” del inicio y el texto de su página.
- [ ] Las páginas viejas `fenix.html` y `tu-primer-sistema.html` ahora redirigen a las nuevas. Si se confirma que los nombres viejos no vuelven, pueden quedar así para siempre.

**Factura Pya'e** (`factura-pyae.html`)

- [ ] Envío del KuDE por WhatsApp y correo.
- [ ] Integración por API. Si no existe, quitá la sección “Para desarrolladores”.
- [ ] Planes Emprendedor, Pyme y Empresa, con sus límites de 100 y 1.000 documentos. Los precios dicen “A consultar”.
- [ ] Los cuatro pasos para habilitarse ante la DNIT.
- [ ] Documentos que emite: factura, nota de crédito, nota de débito, nota de remisión y autofactura.

**Guía de la SIFEN** (`guia-sifen.html`)

- [ ] Se escribió el 18 de noviembre de 2026 con información de la DNIT. Pedile a tu contador que la revise, sobre todo los pasos para habilitarse y los plazos.
- [ ] Actualizala cuando la DNIT cambie el calendario de obligados, que hoy llega hasta 2027, o el plazo de 72 horas para enviar una factura. Al actualizarla, cambiá la fecha visible y `dateModified` en sus datos estructurados.

**Ñañemu POS** (`nanemu-pos.html`)

- [ ] Requisitos: Windows 10 u 11, 4 GB de RAM y 500 MB libres.
- [ ] Funciona sin internet.
- [ ] Importación de productos desde Excel.
- [ ] Migración a Factura Pya'e con productos y clientes.

**Karu Restaurante** (`karu-restaurante.html`)

- [ ] Funciones: mesas y salón, comandas a cocina, carta con QR, delivery, cuentas divididas, insumos y recetas, reportes y factura electrónica con Factura Pya'e.
- [ ] Funciona en tablets y celulares.
- [ ] Demo gratis con la carta del cliente y capacitación en una tarde.
- [ ] Los platos de la maqueta son decorativos: sopa paraguaya, bife koygua, mbeju y jugo de mburucuyá.

**Japuka Dental** (`japuka-dental.html`)

El texto sigue el guion del equipo del sistema, que se desarrolló con el nombre OdontoFlow. Las funciones están confirmadas en su documentación técnica, que vive en `documentacion/` y no se sube al repositorio público porque tiene contraseñas de demostración y notas de seguridad.

- [ ] Nombre definitivo: el sitio lo llama Japuka Dental, aunque la propuesta fue “Japuka Tech”. Se eligió así para seguir la regla de nombres de la marca: una palabra en guaraní y el tipo de producto en castellano.
- [ ] Traducción: el sitio dice que *japuka* significa “reímos”. Conviene confirmarla con alguien que hable guaraní.
- [ ] Capturas: salen de la base de demostración y todos los datos son ficticios, con teléfonos del bloque 555. En las imágenes se reemplazó “OdontoFlow” por “Japuka Dental” en el menú lateral, y “OdontoFlow Clínica Dental” por “Japuka Clínica Dental” en la receta y en la configuración. Cuando el sistema cambie de nombre, regenerá las capturas con `node scripts/capturas-web.mjs` y convertílas a WebP de 1440 y 800 px de ancho.
- [ ] Facturación: los recibos del sistema son comprobantes internos. No prometas factura electrónica con SIFEN hasta que esté integrada.
- [ ] Demostración de 30 minutos por WhatsApp, sin publicar usuarios ni contraseñas.
- [ ] Privacidad: `privacidad.html` dice que el sistema se instala en un servidor de la clínica y que solo vemos los datos de pacientes si la clínica lo pide para soporte. Confirmalo y pedí la asesoría legal sobre historia clínica que está pendiente.

**Datos de ejemplo en las maquetas**

Despensa Ña Rosa, la factura 001-001-0001284 y los montos en guaraníes son decorativos. Pueden quedar así o cambiarse por capturas reales.

---

## 🟢 Para sumar cuando estén listos

- **Redes sociales:** hay un bloque comentado en el pie de cada página, listo para completar.
- **Fotos reales** del equipo, la oficina y clientes.
- **Capturas reales** de Factura Pya'e, Ñañemu POS y Karu Restaurante, en lugar de las maquetas.
- **Logos de clientes**, con su permiso.
- **Calle y número** de la oficina en `contacto.html` y en los datos estructurados de `index.html`. El enlace al mapa ya está.
- **Formulario con envío directo**, por ejemplo con Formspree, si querés recibir mensajes sin que se abra WhatsApp o el correo.
- **Estadísticas de visitas.** Si agregás Google Analytics u otra herramienta, actualizá la política de privacidad.

---

## Cómo cambiar los datos que se repiten

El encabezado y el pie de página están copiados en cada página. Para cambiar un dato, usá **Buscar y reemplazar en todos los archivos**: en VS Code es `Ctrl + Shift + H`.

| Dato | Buscar | Aparece en |
|---|---|---|
| Número de WhatsApp | `595984935082` y `+595 984 935 082` | Todas las páginas, en enlaces, pie y botón flotante |
| Correo | `comercial@sistemasparaguay.com.py` | Todas las páginas y los datos estructurados de `index.html` |
| Ubicación | `San Juan Nepomuceno` y `maps.app.goo.gl/9hSEquqGpwsc173g7` | Pie de página, contacto, privacidad, nosotros y los datos estructurados de `index.html` |
| Dominio | `https://sistemasparaguay.com.py` | Etiquetas de cada página, `sitemap.xml`, `robots.txt` y `CNAME` |
| Horario | `8:00 a 18:00` | Pie de página, inicio y contacto |

Los mensajes de WhatsApp prearmados están codificados dentro de los enlaces. Para cambiar uno, buscá el texto del enlace y copiá el formato de uno existente.

---

## Imágenes del sitio anterior

Están guardadas en `_archivo/imagenes/` y **no se usan** en el sitio nuevo:

- `multiplataforma.jpg` muestra el producto de otra empresa (HiDoctor). No conviene reutilizarla.
- `POS.png` tiene un error de tipeo (“Gestión Fisca”) y un logo distinto al de la empresa.
- `FacturaElectronica.png`, `PersonFacturando.png` y `FabricaSoftwware.png` parecen ilustraciones de bancos de imágenes. Si se reutilizan, revisá su licencia y si piden atribución.
- `Logo-DENIT.svg` es el logo de la autoridad tributaria. Usarlo puede dar a entender un aval oficial, por eso se quitó.
- `Fenix_ligth.png` tiene una marca de agua de una herramienta de IA en la esquina.
- Los logos anteriores de Sistemas Paraguay, Fénix y Tu Primer Sistema fueron reemplazados por la nueva identidad y los íconos de los tres sistemas.
- `ñanduti.png`, la ilustración bordada con aves y mate, se reemplazó por el encaje de ñandutí dibujado para la marca.

---

## Carpeta `memory/` y privacidad

Hasta ahora, el sitio publicado mostraba la página `/memory/project_sistemasparaguay.html` con notas internas y un correo personal.
El nuevo `_config.yml` la excluye de la web a partir de la próxima publicación.
El archivo sigue visible en el repositorio público de GitHub y en su historial. Si no querés que esté ahí, hay que quitarlo del repositorio.
