# Guía para asistentes de IA

Sitio estático de Sistemas Paraguay, publicado con GitHub Pages desde la rama `main`. Todo push a `main` queda publicado.

Antes de editar, leé:

- `docs/identidad-de-marca.md` para el logo, los colores, la tipografía y la voz.
- `docs/contenido-pendiente.md` para saber qué contenido es de ejemplo.

## Reglas

- HTML, CSS y JavaScript puros. Sin frameworks, sin paso de compilación y sin CDN, salvo Google Fonts.
- Textos en español de Paraguay con voseo (“contanos”, “tenés”), frases cortas y sin tecnicismos.
- Colores, tipografías y espaciados: usá solo las variables de `:root` en `assets/css/styles.css`. No agregues colores sueltos.
- Cada vez que cambies `styles.css` o `main.js`, cambiá el número de `?v=` en sus enlaces de todas las páginas, por ejemplo `?v=20261125` por la fecha del día. Cloudflare les dice a los navegadores que guarden esos archivos 4 horas; sin el número nuevo, una página nueva puede verse con el CSS viejo.
- El encabezado, con el desplegable "Sistemas", y el pie se repiten en las 11 páginas con diseño. Si cambiás uno, cambialo en todas.
- Sistemas propios: Factura Pya'e, Ñañemu POS, Karu Restaurante y Japuka Dental, cada uno con su color. `fenix.html` y `tu-primer-sistema.html` son solo redirecciones a los nombres nuevos: no les agregues contenido.
- `404.html` usa rutas absolutas que empiezan con `/`, porque GitHub Pages la sirve desde cualquier dirección. El resto usa rutas relativas.
- Íconos: SVG de Lucide pegados en el HTML con `class="icon"` y `aria-hidden="true"`.
- El contenido inventado está marcado con comentarios `[EJEMPLO]` o `[PENDIENTE]`. Cuando lo reemplaces por datos reales, borrá el comentario y actualizá `docs/contenido-pendiente.md`.
- No publiques datos personales. `memory/`, `docs/`, `documentacion/`, `README.md` y este archivo están excluidos de la web en `_config.yml`, y `_archivo/` se excluye por empezar con guion bajo.
- `documentacion/` es la documentación interna de los sistemas, con contraseñas de demostración. Está en `.gitignore`: no la subas al repositorio, que es público.
- Accesibilidad: contraste mínimo AA, foco visible y animaciones que respetan `prefers-reduced-motion`.

## Probar

Desde la carpeta del proyecto:

```
python -m http.server 8000
```

Revisá cada cambio en computadora y en un ancho de celular de 390 px.
