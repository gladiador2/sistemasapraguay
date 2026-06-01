# Cómo usar el Apple Template

## Archivos generados

```
apple-template/
├── index.html              ← Landing page principal (lista para abrir en navegador)
├── css/
│   ├── design-tokens.css   ← Variables de color, tipografía, espaciado
│   └── animations.css      ← Clases de animación reutilizables
├── js/
│   └── main.js             ← Scroll-reveal, nav blur, count-up, ticker
└── components/
    └── sections.html       ← Snippets comentados para copiar/pegar
```

## Uso rápido

1. Abre `index.html` en tu navegador — funciona sin servidor.
2. Busca todos los comentarios `<!-- REPLACE -->` y cambia el texto/imágenes por tu contenido.
3. Para agregar secciones nuevas, copia los bloques de `components/sections.html` (están comentados con `<!--` y `-->`).

## Reemplazar imágenes

Dentro de cada tarjeta de producto hay un `<div>` placeholder con el texto `[ Tu imagen de producto aquí ]`. Sustitúyelo por:
```html
<img src="ruta/a/tu/imagen.png" alt="Descripción" class="max-h-64 object-contain" />
```

O para fondo completo de sección:
```html
<img src="hero.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
```

## Tokens de diseño clave (CSS)

| Token | Valor | Uso |
|---|---|---|
| `var(--text-hero)` | clamp(2.5rem, 8vw, 6rem) | Titular hero |
| `var(--text-title-1)` | clamp(2rem, 5vw, 4rem) | H1 de sección |
| `var(--color-gray-900)` | #1d1d1f | Texto principal |
| `var(--color-gray-500)` | #86868b | Texto secundario |
| `var(--color-blue)` | #0071e3 | Links y CTAs |
| `var(--ease-apple)` | cubic-bezier(.25,.46,.45,.94) | Transiciones |

## Clases de animación

| Clase | Efecto |
|---|---|
| `reveal` | Fade + slide-up al hacer scroll |
| `reveal-scale` | Scale + fade al hacer scroll |
| `stagger` | Aplica retraso incremental a hijos |
| `btn-apple` | Hover lift + active scale |
| `card-img-wrap` | Zoom suave en hover sobre imagen |
| `gradient-text` | Texto con gradiente animado |
| `pulse-badge` | Pulso de glow azul |

## Secciones disponibles en `components/sections.html`

- `HERO DARK` — hero pantalla completa, fondo negro con gradiente
- `HERO LIGHT` — hero centrado, fondo blanco
- `ANNOUNCE` — una línea, tipografía grande, fondo gradiente
- `2-COL FEATURE dark` — visual + texto, fondo negro
- `2-COL FEATURE light` — visual + texto, fondo blanco
- `PRODUCT CARD GRID` — grilla de 2 tarjetas (estilo Apple shelf)
- `STATS BAND` — números con count-up animation
- `PRICING` — 3 planes con destacado central
- `FAQ` — acordeón nativo con `<details>`
- `CTA BAND` — sección de conversión full-width

## Paleta de colores

```css
/* Fondo claro */   #ffffff / #f5f5f7
/* Texto */         #1d1d1f
/* Texto muted */   #6e6e73 / #86868b
/* Azul Apple */    #0071e3
/* Azul link */     #2997ff
/* Fondo oscuro */  #000000 / #1c1c1e
```
