FROM docker.io/oven/bun:1
ADD . /app
WORKDIR /app
ENTRYPOINT ["bun", "run", "start"]
