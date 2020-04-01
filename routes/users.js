module.exports = (app) => {
  const users = require('../controllers/users.js');

  app.get('/GetUserList', users.GetUserList);
}