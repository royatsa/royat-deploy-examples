# Laravel on Royat Deploy: build the front-end assets with Node, then run PHP-FPM + nginx.
# Build Pack: Dockerfile · Base directory: /laravel · Ports exposes: 8080
FROM node:22-alpine AS assets
WORKDIR /app
# Set FAIL_BUILD=1 as a build variable to see how a failed build is reported.
ARG FAIL_BUILD=0
COPY package.json package-lock.json vite.config.js check-build.js ./
COPY resources ./resources
RUN npm ci --no-audit --no-fund && npm run build

FROM serversideup/php:8.4-fpm-nginx-alpine-v5.1.2
WORKDIR /var/www/html
COPY --chown=www-data:www-data . .
RUN composer install --no-dev --optimize-autoloader --no-interaction --no-progress
COPY --from=assets --chown=www-data:www-data /app/public/build ./public/build
# Startup checks (and the CRASH_ON_START test switch) run before nginx/php-fpm.
COPY --chmod=755 docker/entrypoint.d/ /etc/entrypoint.d/
EXPOSE 8080
