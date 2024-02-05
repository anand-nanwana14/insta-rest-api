const express = require('express');
const bodyParser = require('body-parser');

const logout = express();
const port = 2003;

logout.use(bodyParser.json());

const logoutRecords = [
  { user_id: 123, session_id: 'session_1', username: 'sunny_singh123', auth_token: 'token123', ipaddress: '1.1.1.1', deviceinfo: 'Android', status: 'Logged-out' },
  { user_id: 234, session_id: 'session_2', username: 'uv_07', auth_token: 'token234', ipaddress: '1.1.1.2', deviceinfo: 'Android', status: 'Logged-out' }
];

logout.post('/logout', (req, res) => {
  const newLogout = req.body;
  logoutRecords.push(newLogout);
  res.status(201).json(newLogout);
});

logout.listen(2003, () => {
  console.log(`Server is running on port 2003`);
});

// dummy data for request body
// {
//     "user_id": 345,
//     "session_id": "session_3",
//     "username": "sanskar123",
//     "auth_token": "token345",
//     "ipaddress": "1.1.1.3",
//     "deviceinfo": "Windows",
//     "status": "Logged-out"
// }