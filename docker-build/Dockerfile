FROM node:14.21.3-bullseye

RUN npm link ini
RUN apt-get update
RUN apt-get install -y openssl

CMD ["/grouping/main.sh"]