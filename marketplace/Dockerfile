FROM node:lts as dependencies
WORKDIR /marketplace14
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /marketplace14
COPY . .
COPY --from=dependencies /marketplace14/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /marketplace14
ENV NODE_ENV production

COPY --from=builder /marketplace14/const ./const
COPY --from=builder /marketplace14/components ./components
COPY --from=builder /marketplace14/pages ./pages
COPY --from=builder /marketplace14/public ./public
COPY --from=builder /marketplace14/styles ./styles
COPY --from=builder /marketplace14/package.json ./package.json
COPY --from=builder /marketplace14/.next ./.next
COPY --from=builder /marketplace14/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]