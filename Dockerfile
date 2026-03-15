FROM oven/bun:1.3.5 AS builder

WORKDIR /app

ARG VITE_CONVEX_URL
ARG VITE_CONVEX_SITE_URL

ENV VITE_CONVEX_URL=$VITE_CONVEX_URL
ENV VITE_CONVEX_SITE_URL=$VITE_CONVEX_SITE_URL

COPY package.json bun.lock tsconfig.json ./

COPY apps/web/package.json apps/web/package.json
COPY apps/web/tsconfig.json apps/web/tsconfig.json
COPY apps/web/vite.config.ts apps/web/vite.config.ts
COPY apps/web/components.json apps/web/components.json
COPY apps/web/index.html apps/web/index.html

COPY packages/backend/package.json packages/backend/package.json
COPY packages/env/package.json packages/env/package.json
COPY packages/env/tsconfig.json packages/env/tsconfig.json
COPY packages/config/package.json packages/config/package.json
COPY packages/config/tsconfig.base.json packages/config/tsconfig.base.json

RUN bun install --frozen-lockfile

COPY apps/web/src apps/web/src
COPY packages/backend/convex packages/backend/convex
COPY packages/env/src packages/env/src

WORKDIR /app/apps/web

RUN bun run build

FROM nginx:1.27-alpine AS runtime

COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
