FROM node:11.6.0-alpine AS builder

# install chrome for protractor tests
#--RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#--RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#--RUN apt-get update && apt-get install -yq google-chrome-stable

# add app
COPY . /app
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#--ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
#--COPY package.json /app/package.json
RUN npm i
#--RUN npm install -g @angular/cli@7.3.9
RUN $(npm bin)/ng build --prod



# start app
#--EXPOSE 4200
#--CMD ng serve --host 0.0.0.0 --disableHostCheck true

FROM nginx:1.15.8-alpine
#COPY --from=builder /culture-streaming-app/dist/culture-streaming-app/ /usr/share/nginx/html