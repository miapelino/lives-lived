# Lives Lived API

Uses Node, Express & Postgres.

Serves requests (get, post, put, delete) from one page with a separate function for each.

**Dependencies**

Uses **express** to serve the API, **body-parser** to parse responses, **postgres** for the database, **knex** as the query engine, **dotenv** to protect environment variables, **helmut** to add proper headers, **cors** to prevent/allow XSS, **morgan** as our logger, and **nodemon** as a dev dependency to watch for changes.

All dependencies are included in the cloned project.

## Instructions

**1. Clone the repo**

```
git clone https://github.com/miapelino/lives-lived-api.git
```

**2. CD into the project**

```
cd lives-lived-api
```

**3. Install dependencies**

```
npm install
```

**4. Start Postgres**

```
brew services start postgresql
```

## Lives Lived Frontend
View the [repository for the frontend](https://github.com/miapelino/lives-lived-client) that goes along with this API. It uses React and Bootstrap to display a responsive data table.

## Notes and credit:
An important piece that is missing from this API is an authentication API. In that case it is recommended to install bCrypt for password hashing and authentication. Then, more routes should be created for registering, logging in and logging out users. There should also be a scheme for keeping users logged in. The suggested method for persisting logins would be to use JWT for token creation, Redis to store tokens in server memory, and localStorage to save tokens on the frontend. The tokens stored in localStorage will be sent back to the API via authorization headers for protected requests and would need to be verified by the server.

I followed olinations's CRUD Starter API, using this Medium article [here](https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438?source=friends_link&sk=51028bf98ff92bc659d3edbb539a82bb).
