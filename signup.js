const express = require('express');
const bodyParser = require('body-parser');

const signup = express();
const port = 2001;

signup.use(bodyParser.json());

const users = [
  { user_id: 123, username: 'sunny_singh123', full_name: 'Sunny Singh', email: 'sunny@gmail.com', mobile: 1122334455, password: '*******' },
  { user_id: 234, username: 'uv_07', full_name: 'Yuvraj Singh', email: 'uv@gmail.com', mobile: 1223344556, password: '*******' }
];

signup.get('/users', (req, res) => {
  res.json(users);
});

signup.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

signup.listen(2001, () => {
  console.log(`Server is running on port 2001`);
});

// Dummy data for signup in request body 
//  {
//   "user_id": 345,
//   "username": "hello-world",
//   "full_name": "Hello World",
//   "email": "Hello@example.com",
//   "mobile": 1234567890,
//   "password": "********"
// }

