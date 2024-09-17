FROM docker.io/oven/bun:1
ADD . /app
WORKDIR /app
ENV NODE_ENV=production
ENTRYPOINT ["bun", "run", "start"]
