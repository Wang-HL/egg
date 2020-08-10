'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 更新用户信息
  async fetch() {
    const { ctx } = this;
    console.log(ctx.model)
    const result = await ctx.model.User.find();
    return result;
  }
}
module.exports = UserService;