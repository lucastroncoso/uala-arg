## Documentación

Proyecto desarrollado en Next, deployeado en Vercel (en el team de Marketing y de Infraestructura)

Repositorio: https://github.com/lucastroncoso/uala-arg Online: https://www.uala.com.ar/ Pruebas:
https://uala-arg-infra-uala.vercel.app/ Storybook: https://uala-arg-storybook.vercel.app/

Ramas/Branches:



- main: version online de produccion en deploy en Vercel
- develop: rama principal, en deploy en Vercel en sitio de pruebas
- storybook: rama creada para hacer pruebas de integración y deploy con storybook
- feature/faqsInSections: creada por Agus, a confirmar si fue mergeada.
- fix/gamingPath: creada por Agus, a confirmar si fue mergeada.
- feature/filterSumate: creada por Agus, a confirmar si fue mergeada.

## Para comenzar

1. Configurar las variables agregando un archivo `.env.local`. en la raiz del proyecto con las
   siguientes variables: CONTENTFUL_SPACE_ID y CONTENTFUL_ACCESS_TOKEN.

2. correr en la terminal sobre el proyecto:

```bash
npm install
```

luego para arrancar:

```bash
npm run dev
# o
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Mas info

El contenido de cada seccion puede editarse desde `data/SiteARContent.json`.

Los estilos customizados pueden verse desde `tailwind.config.js`

[Rutas de la API](https://nextjs.org/docs/api-routes/introduction) pueden verse desde
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint puede editarse en
`pages/api/hello.js`.

Para aprender mas de Next.js, estan los siguientes recursos:

- [Documentacion de Next.js ](https://nextjs.org/docs) - caracteristicas de Next js y su API.
- [Aprende Next.js](https://nextjs.org/learn) - tutorial interactivo de Next js.

Podes mirar el repositorio de Next js
[the Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deploy en Vercel

La manera mas sencilla para deployar la app de Next js.
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
de los creadores de Next js.

Deploy: 12
