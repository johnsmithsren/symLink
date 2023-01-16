import { Controller } from 'egg';
import protobuf from "protobufjs/minimal"
import CFG from '../../js/init.js'
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log(protobuf)
    CFG()
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
