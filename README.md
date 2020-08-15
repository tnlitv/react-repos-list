### React Repositories List

This app renders react repositories list fetched from Github GraphQL API

Technologies used:
- react
- typescript
- graphql (apollo-client)
- styled-components

#### Setup
- `git clone git@github.com:tnlitv/react-repos-list.git`
- `cd react-repos-list`
- `npm i`

Obtain a personal access token as described here: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

Then create `.env` file based on `.env.example` 

#### Run development server manually
- `npm run start`

Server should now be running at `http://localhost:3000/`

#### Run development locally with Docker
Note: Make sure you're in a project root directory. Then run:

`docker build -t sample:dev .`

`docker run -it --rm -v {$PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev`

Server should now be running at `http://localhost:3001/`