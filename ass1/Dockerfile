FROM nginx:alpine

WORKDIR  /usr/share/nginx/html

#the . .  mean copy current directory to destination /usr/share/nginx/html
COPY . .

EXPOSE 80

CMD [ "nginx" ,"-g" , "daemon off;" ]