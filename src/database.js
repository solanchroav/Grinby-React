const mongoose = require('mongoose');
const URI = 'mongodb+srv://solanchroav:soll1328@cluster0-4ltwj.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
