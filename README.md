### React Repositories List

This app renders react repositories list fetched from Github GraphQL API

Technologies used:
- React
- Typescript
- GraphQL (apollo-client)
- styled-components
- Material UI
- react-testing-library 

#### Setup
- `git clone git@github.com:tnlitv/react-repos-list.git`
- `cd react-repos-list`
- `npm i`

Obtain a personal access token as described here: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

Then create `.env` file based on `.env.example` 

#### Run app locally
`npm run start` - starts dev server and codegen in watch mode
Server should be running at `http://localhost:3000/`

`npm run test` - runs tests in watch mode

`npm run build` - builds application <br> 
use `make prod` to serve app with nginx or `serve -s build` to serve with [serve](https://www.npmjs.com/package/serve)

#### Run app with Docker
`make dev` for development environment
Server should be running at `http://localhost:3000/`

`make prod` for production environment <br>
Builds and serves application at `http://localhost:3001/`

`make test` to run tests (not in watch mode)


#### Todo:
- replace infinite scroller with virtualized table