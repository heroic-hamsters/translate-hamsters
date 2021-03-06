const db = require('../dbconfig.js');
// var Word = require('./word');

require('./word');
require('./language');
require('./sentence');

var User = db.model('User', {
  tableName: 'users',
  hidden: ['password'],
  sentences: function() {
    return this.belongsToMany('Sentence', 'user_sentences');
  },
  words: function() {
    return this.belongsToMany('TranslatedWord', 'user_words');
  },
  createdSentence: function() {
    return this.hasOne('Sentence');
  },
  targetLanguages: function() {
    return this.belongsToMany('Language', 'user_languages');
  },
  nativeLanguage: function() {
    return this.belongsTo('Language');
  }


});

module.exports = User;
