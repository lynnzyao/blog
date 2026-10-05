# Personal blog

This Next.js application builds a static website for Cloudflare Pages or Workers.
Run commands from `web/` using Node.js 22:

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The complete site is exported to `out/`, including HTML, JavaScript, CSS, images,
and a 404 page. `out/` is generated and ignored by Git. Images are served directly
without a Next.js image optimization server. `next start` does not support this
export; use a static file server or the Workers preview below.

## Cloudflare Pages with GitHub

Push this repository to GitHub, then create a Pages project in Cloudflare and
connect the repository. Set:

| Setting | Value |
| --- | --- |
| Root directory | `web` |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION=22` |

Choose your production branch. Cloudflare installs dependencies, builds the site,
and publishes it on subsequent pushes. Pages serves `out/` directly; the Workers
configuration in `wrangler.jsonc` is for the alternative workflow below.

## Cloudflare Workers with GitHub

Create a Worker connected to the GitHub repository and set:

| Setting | Value |
| --- | --- |
| Root directory | `web` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler@4 deploy` |
| Environment variable | `NODE_VERSION=22` |

Use `lynn-blog` as the Worker name, or change `name` in `wrangler.jsonc` to match
your Cloudflare Worker. Wrangler uploads `out/` as static assets; no Worker script
or Next.js runtime adapter is needed. Unknown routes serve the exported 404 page
with HTTP 404 rather than falling back to the homepage.

For a local Cloudflare preview after building:

```bash
npx wrangler@4 dev
```

For a manual deployment, authenticate with `npx wrangler@4 login`, build the site,
then run `npx wrangler@4 deploy`. These commands download Wrangler if necessary.

## Current scope

The homepage, `/posts/`, individual Markdown posts, `/projects/`, and individual
project pages are statically generated. Edit posts and projects in `content/`;
see [the content guide](content/README.md) for file formats and image placement.
The subscription form currently displays a
placeholder message and does not save email addresses. Future dynamic routes
must provide `generateStaticParams()` to be exported; request-time server features
and Server Actions require a different deployment setup.

## References

- [Cloudflare Pages: static Next.js](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare Workers: static sites and 404 pages](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)
