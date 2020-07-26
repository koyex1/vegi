# Contact Manager

> MERN Stack Web application
> Authenticated Users can Create, Update & Delete contacts
> Features JWT Token based User Authentication.
> Features extensive use of Context API & Hooks.

## Usage

Install dependencies

```bash

npm install

cd client && npm install

cd ..

```

### Run Server

Make sure mongoDB is installed locally

```bash

npm run server  # Express API  :5000

npm run dev  # MERN APP

```

## Postman Routes

Test your routes in PostMan with the following...

### Users & Authentication Routes

1. Register a new user - POST http://localhost:5000/api/users

   | Headers      |                  |
   | ------------ | ---------------- |
   | key          | value            |
   | Content-Type | application/json |

Body

```JSON
{
"name": "Sam Smith",
"email": "sam@gmail.com",
"password": "123456"
}
```

2. Login a user - POST http://localhost:5000/api/auth

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |

Body

```JSON
{
"email": "sam@gmail.com",
"password": "123456"
}
```

3. Get logged in user - GET http://localhost:5000/api/auth

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-auth-token | <VALID_TOKEN>    |

### Contacts Routes

1. Get a users contacts - GET

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-auth-token | <VALID_TOKEN>    |

2. Add a new contact - POST http://localhost:5000/api/contacts

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-auth-token | <VALID_TOKEN>    |

Body

```JSON
{
"name": "William Williams",
"email": "william@gmail.com",
"phone": "77575894"
}
```

3. Update a contact - PUT http://localhost:5000/api/contacts/<CONTACT_ID>

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-auth-token | <VALID_TOKEN>    |

Body

```JSON
{
"phone": "555555"
}
```

4. Delete a contact - DELETE http://localhost:5000/api/contacts/<CONTACT_ID>

| Headers      |                  |
| ------------ | ---------------- |
| key          | value            |
| Content-Type | application/json |
| x-auth-token | <VALID_TOKEN>    |
