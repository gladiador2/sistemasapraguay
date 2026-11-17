# Sistemas Paraguay · Sitio web

Sitio institucional de **Sistemas Paraguay**, publicado con GitHub Pages en [sistemasparaguay.com.py](https://sistemasparaguay.com.py).

Es HTML, CSS y JavaScript puros: sin frameworks, sin paso de compilación y sin dependencias que instalar.

- **Identidad de marca** (logo, colores, tipografía, voz): [`docs/identidad-de-marca.md`](docs/identidad-de-marca.md)
- **Contenido de ejemplo que hay que reemplazar:** [`docs/contenido-pendiente.md`](docs/contenido-pendiente.md)

> ⚠️ Todo lo que se sube a `main` se publica solo. Revisá el contenido pendiente antes de subir.

## Estructura

```
├── index.html                 Inicio
├── servicios.html             Servicios en detalle
├── fenix.html                 Producto Fénix (facturación electrónica)
├── tu-primer-sistema.html     Producto Tu Primer Sistema (POS gratis)
├── nosotros.html              Historia, valores y equipo
├── contacto.html              Canales y formulario
├── privacidad.html            Política de privacidad
├── 404.html                   Página de error (usa rutas que empiezan con "/")
├── assets/
│   ├── css/styles.css         Todos los estilos; los colores y tamaños están al principio
│   ├── js/main.js             Menú móvil, animaciones, contadores y formulario
│   └── img/
│       ├── marca/             Logos e isotipos (SVG y PNG)
│       ├── productos/         Logos de Fénix y Tu Primer Sistema
│       ├── og-image.png       Imagen al compartir en redes y WhatsApp
│       └── icon-*.png         Íconos de la app
├── favicon.svg · favicon.ico · apple-touch-icon.png · site.webmanifest
├── robots.txt · sitemap.xml · CNAME
├── _config.yml                Excluye de la web las carpetas internas
├── docs/                      Guías (no se publican)
└── _archivo/                  Versiones anteriores del sitio (no se publican)
```

## Ver el sitio en tu computadora

Lo más simple es abrir `index.html` con doble clic. Todo funciona, salvo la página `404.html`.

Para verlo igual que en internet, levantá un servidor local desde la carpeta del proyecto:

```
python -m http.server 8000
```

Después abrí http://localhost:8000 en el navegador.

## Publicar

1. Subí los cambios a la rama `main`.
2. GitHub Pages publica el sitio en uno o dos minutos.
3. El dominio está configurado en el archivo `CNAME`. No lo borres.

## Editar

- **Textos:** editá directamente el `.html` de cada página.
- **Encabezado y pie:** están repetidos en las 8 páginas. Si cambiás un enlace del menú o del pie, cambialo en todas, con buscar y reemplazar.
- **Colores, tipografías y tamaños:** son variables al principio de `assets/css/styles.css`. Por ejemplo, `--ypacarai` es el azul principal.
- **Íconos:** son SVG de [Lucide](https://lucide.dev) pegados en el HTML. Para agregar uno, copiá el SVG desde lucide.dev y ponele `class="icon"`.
- **Rosetón de ñandutí decorativo:** se dibuja con `<svg class="nanduti"><use href="#nanduti"></use></svg>` y se define una vez al principio de cada página.
- **Animaciones al hacer scroll:** cualquier bloque con el atributo `data-reveal` aparece suavemente.
- **Formulario de contacto:** no usa servidor. Arma el mensaje y abre WhatsApp o el correo. El número y el correo están en los atributos `data-whatsapp` y `data-email` del formulario.
- **Página nueva:** copiá una página parecida, cambiá título, descripción, URL canónica y contenido, y agregala al menú de todas las páginas y a `sitemap.xml`.

## Créditos y licencias

- Íconos: [Lucide](https://lucide.dev), licencia ISC.
- Ícono de WhatsApp: [Simple Icons](https://simpleicons.org), licencia CC0. WhatsApp es una marca registrada de Meta.
- Tipografías: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) y [Figtree](https://fonts.google.com/specimen/Figtree), licencia SIL Open Font License.
- Logos de Fénix y Tu Primer Sistema: propiedad de Sistemas Paraguay.
