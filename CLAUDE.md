# Futbol Para Todos — Contexto del proyecto

## ¿Qué es?
Agregador de canales de TV deportivos con streaming embebido. SPA en HTML/CSS/JS puro, sin frameworks ni build process. PWA instalable en mobile.

**Producción:** https://futbol-para-todos-chi.vercel.app/  
**GitHub:** https://github.com/gercho23/futbol-para-todos  
**Deploy:** git push a `main` → Vercel auto-deploy (configurado)

## Archivos clave

| Archivo | Descripción |
|---|---|
| `index.html` | App completa — UI, CSS y JS todo embebido (~4200 líneas) |
| `channels.js` | Array de 100+ canales con fuentes de streaming + objeto LOGOS |
| `sw.js` | Service Worker PWA (cache name: `fpt-v2`) |
| `manifest.json` | Config PWA (tema verde #22c55e) |
| `vercel.json` | Headers no-cache para js/html/icons |

## Estructura de datos — channels.js

```js
// Objeto LOGOS: ~80 canales → URLs directas de upload.wikimedia.org (NO usar Special:FilePath ni SVG thumbnail)
const LOGOS = { 'Nombre Canal': 'https://upload.wikimedia.org/...' }

// Array channels:
{
  id: string,
  name: string,
  icon: string,        // abreviatura 2-3 chars
  color: string,       // hex
  region: string,      // 'arg' | 'usa' | 'mx' | 'br' | 'int' | 'ent' | 'events'
  logo: string,        // URL imagen (usar LOGOS['nombre'] o URL directa)
  customSources: [
    { url: string, type: 'iframe' | 'hls' }
  ]
}
```

## Secciones de la app (index.html)

- `inicio` — grid de canales filtrable por tab/región
- `player` — reproductor iframe con fallback entre fuentes
- `buscar` — búsqueda en tiempo real
- `argentina` — partidos de la Selección Argentina
- `mundial` — Mundial 2026: grupos, fixtures, standings, countdown
- `stats` — estadísticas

## Tema visual
- Fondo oscuro: `#0a0e0a`
- Acento verde: `#22c55e`
- Mobile-first con hamburger menu

## Flujo de trabajo
1. Hacer cambios en `index.html` o `channels.js`
2. Al terminar la conversación, el hook de Stop sube automáticamente a GitHub y Vercel despliega solo

## Reglas importantes
- Los logos deben usar URLs directas a `upload.wikimedia.org` — nunca `Special:FilePath` ni URLs de thumbnail SVG de Wikimedia (se rompen)
- No hay build process — los cambios en los archivos se publican directamente
- `settings.local.json` tiene el hook de auto-push configurado (Stop hook → git add/commit/push)
