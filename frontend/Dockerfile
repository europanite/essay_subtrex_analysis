FROM node:24-bookworm-slim

RUN apt-get update && apt-get install -y \
    libnspr4 \
    libnss3 \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY app/package*.json ./
RUN npm ci

CMD ["npm", "start"]
