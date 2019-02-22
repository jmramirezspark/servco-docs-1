FROM node:8
RUN mkdir -p /usr/src/servco-docs
WORKDIR /usr/src/servco-docs

COPY . .

RUN npm install --global gatsby-cli

RUN npm install

EXPOSE 4000

CMD ["gatsby", "develop","-p","4000"]

