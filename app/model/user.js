'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    nickname: String,
    username: String,
    password: String,
    token: String,
    createTime: String,
    updateTime: String,
  }, {
    versionKey: false,
  });
  return mongoose.model('User', UserSchema, 'user');
};