# API GRAPHQL - Modelo para un MicroServicio


##Example Mutation and Query

mutation login($email: String!, $password: String!) {
  loginIn(email: $email, password: $password) {
    email
    token
    path
  }
}

{
  "email":"example@gmail.com",
  "password":"12345"
}
