<div align="center">
	<h1>Case Studies Gallery (Next.js + RSC)</h1>
	<p>Listado de estudios de caso renderizado con React Server Components y filtrado client-side.</p>
</div>

## ✨ Características

- Next.js (App Router) con React Server Components (RSC)
- Datos mock en `app/api/case-studies.json`
- Fetch de datos en el servidor (sin fetch en el cliente para la lista inicial)
- Búsqueda en vivo (Client Component) filtrando por título
- Grid responsivo con Tailwind CSS
- Optimización de imágenes remotas (`next/image` + dominio permitido `picsum.photos`)

## 📂 Estructura relevante

```
app/
	page.tsx                 # Home con botón de acceso
	case-studies/page.tsx    # Página server (RSC) que carga los datos
	api/case-studies.json    # Fuente mock de datos
	components/
		SearchBar.tsx          # Componente cliente para filtrar
```

## 🧠 Cómo funciona (RSC + Cliente)

1. `case-studies/page.tsx` (Server Component) lee el JSON usando `fs` (solo disponible en servidor).
2. Renderiza el HTML inicial con todos los estudios de caso.
3. `SearchBar.tsx` es un Client Component que recibe el array y aplica filtrado en el navegador sin refetch.
4. No se envía JS innecesario del server al cliente (solo lo del componente con interactividad).

## 🚀 Inicio rápido

Instalar dependencias:
```bash
npm install
```

Entorno de desarrollo:
```bash
npm run dev
```

Abrir: http://localhost:3000

Entrar a la galería: botón “Ver estudios de caso” o ir a `/case-studies` directamente.

## 🔍 Búsqueda

La búsqueda es case-insensitive sobre el campo `title`.
Se ejecuta en el cliente (no hay round-trip al servidor).

## 🖼 Imágenes

Se usan URLs de `https://picsum.photos` agregando el dominio en `next.config.ts`:
```ts
images: { domains: ["picsum.photos"] }
```