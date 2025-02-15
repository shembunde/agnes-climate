FROM node:22-slim AS Builder

WORKDIR /frontend

COPY ./package.json .

# env
ENV FRONTEND_CLIENT=http://pos.astroune.co.ke/
ENV COMPANY_NAME=ASTROUNE
ENV NODE_ENV=development
ENV SERVER_PORT=3000
ENV TZ=Africa/Nairobi
# end of env

# COPY . .

RUN yarn --frozen-lockfile

CMD ["yarn", "dev"]
