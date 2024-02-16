FROM node:current-alpine

# Install dependencies
WORKDIR /app
COPY ./package*.json ./
RUN npm ci --omit=dev

# Copy source code and build it
COPY ./src ./src

CMD ["node", "src/index.js"]
