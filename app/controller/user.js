'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.fetch();
    ctx.body = res;
  }
}

module.exports = UserController;