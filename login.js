const express = require('express');
const bodyParser = require('body-parser');

const login = express();
const port = 2002;

login.use(bodyParser.json());

const loginRecords = [
  { user_id: 123, session_id: 'session_1', username: 'sunny_singh123', ipaddress: '1.1.1.1', auth_method: '2FA', deviceinfo: 'Android', loginstatus: true, last_login: '1 day' },
  { user_id: 234, session_id: 'session_2', username: 'uv_07', ipaddress: '1.1.1.2', auth_method: 'Password', deviceinfo: 'Android', loginstatus: true, last_login: '6 hours' },
  { user_id: 345, session_id: 'session_3', username: 'sanskar123', ipaddress: '1.1.1.3', auth_method: '2FA', deviceinfo: 'Windows', loginstatus: true, last_login: '2 days' },
  { user_id: 456, session_id: 'session_4', username: 'priyanshu07', ipaddress: '1.1.1.4', auth_method: 'Password', deviceinfo: 'Android', loginstatus: true, last_login: '8 hours' },
  { user_id: 567, session_id: 'session_5', username: 'gautamsingh_144', ipaddress: '1.1.1.5', auth_method: '2FA', deviceinfo: 'Android', loginstatus: true, last_login: '1 day' }
];

login.post('/login', (req, res) => {
  const newLogin = req.body;
  loginRecords.push(newLogin);
  res.status(201).json(newLogin);
});

login.listen(2002, () => {
  console.log(`Server is running on port 2002`);
});

// dummy request body data 
// {
//   "user_id": 678,
//   "session_id": "session_6",
//   "username": "rahul singh",
//   "ipaddress": "1.1.1.6",
//   "auth_method": "2FA",
//   "deviceinfo": "iOS",
//   "loginstatus": true,
//   "last_login": "1 hour"
// }
