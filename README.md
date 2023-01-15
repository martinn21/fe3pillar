
## About the challenge

The intention of this code is to create the basic logic for a login page using react
So, go inside resources/js folders and check the code

## Considerations
- In order to interact with the backend I'm using a fake domain, so you must add the domain in your hosts file 
  - For more information check .env.nginx.local under .docker directory
- Since we are using libraries from laravel to handle the UI you need to run composer
- You must run npm install && npm run dev commands

## Requirements
- Docker

## Steps
- docker-compose up

Once you have configured your stack you need to logged in docker
- docker exec -it fe3pillar_dockerized-php-1 bash
- composer install
- npm install
- npm run dev
