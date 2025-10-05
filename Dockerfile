# ---------- build stage ----------
FROM node:22-alpine AS build
WORKDIR /app

ENV CI=true NODE_ENV=production

# Install deps using whatever lockfile you have
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f pnpm-lock.yaml ]; then \
      corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      corepack enable && corepack prepare yarn@stable --activate && yarn install --frozen-lockfile; \
    else \
      npm ci; \
    fi

# Copy source and build Next.js
COPY . .
RUN npm run build

# ---------- runtime stage ----------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production PORT=3000

# Copy built app (and node_modules) from build stage
COPY --from=build /app ./

# Expose and start Next.js server
EXPOSE 3000
CMD ["npm", "run", "start"]
