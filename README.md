# MERN w/ GraphQL Boilerplate

## Instructions:

### Client Folder:

- delete the package-lock.json
- in the package.json, delete all dependencies
- run the following command:

```
  npm install @apollo/client graphql jwt-decode react react-dom react-router-dom react-scripts web-vitals @testing-library/jest-dom @testing-library/react @testing-library/user-event

```

- navigate to client folder, npm start to make sure there are no errors

### Server Folder: 

- delete the package-lock.json
- in the package.json, delete all dependencies
- run the following command:

```
npm install apollo-server-express bcrypt express graphql jsonwebtoken mongoose 

```

- navigate to config/connection.js
- change name of the database to the name of your corresponding database

- navigate to server folder, npm start to make sure there are no errors

### Final Check:
 - in the root directory, run `npm run develop`
 