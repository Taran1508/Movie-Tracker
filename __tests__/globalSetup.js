const { app } = require('../backend/server');

module.exports = async () => {
  global.testServer = app.listen(3000, () => {
    console.log('Global server running on port 3000');
  });
};
