const express = require('express');
const bodyParser = require('body-parser');

const list = express();
const port = 2000; 

list.use(bodyParser.json());

const followerList = [
  { user_id: 123, session_id: 'session_1', username: 'sunny_singh123', fullname: 'Sunny Singh', relationship: 'following', auth_token: 'token' },
  { user_id: 234, session_id: 'session_2', username: 'uv_07', fullname: 'Yuvraj Singh', relationship: 'following', auth_token: 'token' },
  { user_id: 345, session_id: 'session_3', username: 'sanskar123', fullname: 'Sanskar Sharma', relationship: 'following', auth_token: 'token' },
  { user_id: 456, session_id: 'session_4', username: 'priyanshu07', fullname: 'Priyanshu Singh', relationship: 'follow', auth_token: 'token' },
  { user_id: 567, session_id: 'session_5', username: 'gautamsingh_144', fullname: 'Gautam Singh Rajput', relationship: 'follow', auth_token: 'token' }
];

list.get('/followers', (req, res) => {
  res.json(followerList);
});

list.get('/followers/:user_id', (req, res) => {
  const userId = parseInt(req.params.user_id);
  const follower = followerList.find(item => item.user_id === userId);

  if (follower) {
    res.json(follower);
  } else {
    res.status(404).json({ message: 'Follower not found' });
  }
});

list.listen(2000, () => {
  console.log(`Server is running on port 2000`);
});
