FROM atomiq/node:onbuild

# helpful while debugging, will remove in the future
RUN apt-get update && apt-get install -y vim

# server app
EXPOSE 3000

CMD ["node", "app.js"]
