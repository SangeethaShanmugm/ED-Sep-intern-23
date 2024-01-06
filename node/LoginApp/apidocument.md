## register

http://localhost:8000/auth/register

{
"name": "John",
"email": "john@gmail.com",
"password": "1234567",
"phone": 9883243656,
"role": "user"
}

## login

http://localhost:8000/auth/login

{
"email": "john@gmail.com",
"password": "1234567"
}

## getallUSers

http://localhost:8000/auth/users

## get particular user

http://localhost:8000/auth/userInfo

pass x-access-token in headers
