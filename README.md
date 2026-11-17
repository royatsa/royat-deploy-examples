# Royat Deploy examples

Small apps used to test and document deployments on [Royat Deploy](https://royat.io).
Each folder is one application; point Royat Deploy at this repository and set the
**Base directory** to the folder.

| Folder | Runtime | Build pack | Port |
|---|---|---|---|
| `dockerfile/` | Any (Dockerfile, Node 22 inside) | Dockerfile | 3000 |
| `node-express/` | Node.js 22 + Express | Nixpacks | 3000 |
| `vite-static/` | Vite → static files | Nixpacks, static | 80 |
| `nextjs/` | Next.js 15 (Node 22) | Nixpacks | 3000 |
| `laravel/` | Laravel 13 (PHP 8.4) | Nixpacks | 80 |

Every app prints the content of its `VERSION` file at `/`, so you can see which commit
is live after a deploy or a rollback.

Failure switches (for testing how failures are reported):

- `FAIL_BUILD=1` as a **build** variable: the build stops with a clear message.
- `CRASH_ON_START=1` as a **runtime** variable: the app exits on start (not for static sites).

`laravel/` is the stock `laravel/laravel` skeleton with a version route; it needs
`APP_KEY`, and `SESSION_DRIVER=file`, `CACHE_STORE=file` unless you connect a database.
