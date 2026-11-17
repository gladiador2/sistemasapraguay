# Contenido pendiente · qué es real y qué hay que reemplazar

El sitio se armó con la información del sitio anterior y se completó con **contenido de ejemplo** para que se vea terminado.
Esta lista dice qué es inventado y dónde está.

> ⚠️ **Importante:** GitHub Pages publica automáticamente todo lo que se sube a la rama `main`.
> Antes de subir, reemplazá o eliminá al menos lo de la sección 🔴. Publicar testimonios, casos o personas inventadas como si fueran reales puede engañar a los clientes.

**Truco para encontrar todo:** buscá `[EJEMPLO]` y `[PENDIENTE]` en los archivos `.html`. Cada bloque inventado tiene un comentario así encima.

---

## Lo que ya es real (viene del sitio anterior)

- Nombre de la empresa, dominio `sistemasparaguay.com.py` y ubicación en Asunción.
- WhatsApp **+595 984 935 082**.
- Servicios: apps móviles, páginas web, ecommerce y SaaS.
- **Fénix:** nombre completo, integración con SIFEN y sus seis funciones (comunicación con SIFEN, envío y recepción de documentos, panel en tiempo real, respaldos automáticos, multiempresa y sucursales, soporte 24/7).
- **Tu Primer Sistema:** gratis, punto de venta, inventario, compras, ventas, reportes, clientes y la posibilidad de migrar a Fénix.
- Números: +500 clientes activos, 98 % de satisfacción, +5 años de experiencia y soporte 24/7. Conviene confirmarlos igual.
- Horario de lunes a viernes, de 8:00 a 18:00.

---

## 🔴 Reemplazar o quitar antes de publicar

| Qué | Dónde | Detalle |
|---|---|---|
| Testimonios | `index.html` | Laura Benítez, Diego Fernández y Rosa Giménez son inventados. Usá testimonios reales, con permiso del cliente, o quitá la sección. |
| Casos de éxito | `servicios.html` | Los tres proyectos y sus resultados (−60 %, ×3 y −45 %) son inventados. |
| Equipo | `nosotros.html` | Las seis personas son inventadas. Reemplazá nombres, cargos y descripciones, y si querés, poné fotos en lugar de las iniciales. |
| Historia y línea de tiempo | `nosotros.html` | Los años 2019, 2020, 2022, 2024 y 2026, y el relato de cómo nació la empresa. |
| Correo `hola@sistemasparaguay.com.py` | Todas las páginas | Es inventado. El sitio anterior usaba `info@sistemasparaguay.com`. Creá la casilla o reemplazala por la real en todas las páginas. |
| Instalador de Tu Primer Sistema | `tu-primer-sistema.html` | El botón apunta a `descargas/tu-primer-sistema-setup.exe`, que no existe. Ya daba error en el sitio anterior. GitHub no acepta archivos de más de 100 MB en el repositorio, así que conviene subirlo a **GitHub Releases** y cambiar el enlace. |
| Política de privacidad | `privacidad.html` | Es un texto modelo. Pedí que la revise un profesional. |

---

## 🟡 Confirmar (inventado, pero plausible)

**Atención y plazos**

- [ ] Atención en guaraní y jopará (valor “Cercanía” en `nosotros.html`).
- [ ] Horario de los sábados, de 8:00 a 12:00 (`contacto.html`).
- [ ] Tiempos de respuesta: “el mismo día hábil”, “en 48 horas hábiles” y “menos de 24 horas hábiles”.
- [ ] Atención presencial con cita previa en Asunción.
- [ ] Plazos estimados de cada servicio (`servicios.html`).
- [ ] Lista de tecnologías que usa el equipo (`servicios.html`).
- [ ] Preguntas frecuentes del inicio: período de garantía, propiedad del código y presupuesto por etapas.

**Fénix** (`fenix.html`)

- [ ] Envío del KuDE por WhatsApp y correo.
- [ ] Integración por API. Si no existe, quitá la sección “Para desarrolladores”.
- [ ] Planes Emprendedor, Pyme y Empresa, con sus límites de 100 y 1.000 documentos. Los precios dicen “A consultar”.
- [ ] Los cuatro pasos para habilitarse ante la DNIT.
- [ ] Documentos que emite: factura, nota de crédito, nota de débito, nota de remisión y autofactura.

**Tu Primer Sistema** (`tu-primer-sistema.html`)

- [ ] Requisitos: Windows 10 u 11, 4 GB de RAM y 500 MB libres.
- [ ] Funciona sin internet.
- [ ] Importación de productos desde Excel.
- [ ] Migración a Fénix con productos y clientes.

**Datos de ejemplo en las maquetas**

Despensa Ña Rosa, la factura 001-001-0001284 y los montos en guaraníes son decorativos. Pueden quedar así o cambiarse por capturas reales.

---

## 🟢 Para sumar cuando estén listos

- **Redes sociales:** hay un bloque comentado en el pie de cada página, listo para completar.
- **Fotos reales** del equipo, la oficina y clientes.
- **Capturas reales** de Fénix y Tu Primer Sistema, en lugar de las maquetas.
- **Logos de clientes**, con su permiso.
- **Dirección exacta** y un mapa de Google Maps en `contacto.html`.
- **Formulario con envío directo**, por ejemplo con Formspree, si querés recibir mensajes sin que se abra WhatsApp o el correo.
- **Estadísticas de visitas.** Si agregás Google Analytics u otra herramienta, actualizá la política de privacidad.

---

## Cómo cambiar los datos que se repiten

El encabezado y el pie de página están copiados en cada página. Para cambiar un dato, usá **Buscar y reemplazar en todos los archivos**: en VS Code es `Ctrl + Shift + H`.

| Dato | Buscar | Aparece en |
|---|---|---|
| Número de WhatsApp | `595984935082` y `+595 984 935 082` | Todas las páginas, en enlaces, pie y botón flotante |
| Correo | `hola@sistemasparaguay.com.py` | Todas las páginas y los datos estructurados de `index.html` |
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
- `Fenix_ligth.png` tenía una marca de agua de una herramienta de IA en la esquina. La versión recortada en `assets/img/productos/` ya no la tiene.
- Los logos anteriores de Sistemas Paraguay fueron reemplazados por la nueva identidad.

---

## Carpeta `memory/` y privacidad

Hasta ahora, el sitio publicado mostraba la página `/memory/project_sistemasparaguay.html` con notas internas y un correo personal.
El nuevo `_config.yml` la excluye de la web a partir de la próxima publicación.
El archivo sigue visible en el repositorio público de GitHub y en su historial. Si no querés que esté ahí, hay que quitarlo del repositorio.
