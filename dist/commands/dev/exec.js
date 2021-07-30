"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const child_process_1 = __importDefault(require("child_process"));
const exec = util_1.default.promisify(child_process_1.default.exec);
const discord_js_1 = require("discord.js");
const lib_1 = require("../../lib");
class ExecCommand extends lib_1.CommandBase {
    constructor() {
        // Name, Category, alias, cooldown
        super('exec', 'dev', ['console'], 1);
    }
    async run(bot, message, args) {
        if (!args[0])
            return message.channel.send("Debes ingresar algo");
        const e = await exec(args.join(" "));
        const { stdout, stderr } = e;
        if (!stdout && !stderr)
            return message.channel.send("Comando ejecutado pero sin output");
        if (stdout) {
            const text = discord_js_1.Util.splitMessage(stdout, { maxLength: 1950, char: "" });
            message.channel.send(text[0]);
        }
        if (stderr) {
            const text = discord_js_1.Util.splitMessage(stderr, { maxLength: 1950, char: "" });
            message.channel.send(text[0]);
        }
    }
}
exports.default = ExecCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9kZXYvZXhlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QixrRUFBK0I7QUFDL0IsTUFBTSxJQUFJLEdBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLDJDQUEyQztBQUMzQyxtQ0FBd0M7QUFFeEMsTUFBcUIsV0FBWSxTQUFRLGlCQUFXO0lBQ2hEO1FBQ0ksa0NBQWtDO1FBQ2xDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBUSxFQUFFLE9BQWdCLEVBQUUsSUFBbUI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxJQUFJLEdBQUcsaUJBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxJQUFJLEdBQUcsaUJBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN0RSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7Q0FDSjtBQXBCRCw4QkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcclxuaW1wb3J0IGNoIGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XHJcbmNvbnN0IGV4ZWMgPSB1dGlsLnByb21pc2lmeShjaC5leGVjKTtcclxuaW1wb3J0IHsgTWVzc2FnZSwgVXRpbCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcbmltcG9ydCB7IENvbW1hbmRCYXNlIH0gZnJvbSAnLi4vLi4vbGliJztcclxuaW1wb3J0IEJvdCBmcm9tICcuLi8uLi9ib3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGVjQ29tbWFuZCBleHRlbmRzIENvbW1hbmRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIE5hbWUsIENhdGVnb3J5LCBhbGlhcywgY29vbGRvd25cclxuICAgICAgICBzdXBlcignZXhlYycsICdkZXYnLCBbJ2NvbnNvbGUnXSwgMSlcclxuICAgIH1cclxuICAgIGFzeW5jIHJ1bihib3Q6IEJvdCwgbWVzc2FnZTogTWVzc2FnZSwgYXJnczogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmICghYXJnc1swXSkgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiRGViZXMgaW5ncmVzYXIgYWxnb1wiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZSA9IGF3YWl0IGV4ZWMoYXJncy5qb2luKFwiIFwiKSk7XHJcbiAgICAgICAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gZTtcclxuICAgICAgICBpZiAoIXN0ZG91dCAmJiAhc3RkZXJyKSByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoXCJDb21hbmRvIGVqZWN1dGFkbyBwZXJvIHNpbiBvdXRwdXRcIik7XHJcbiAgICAgICAgaWYgKHN0ZG91dCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gVXRpbC5zcGxpdE1lc3NhZ2Uoc3Rkb3V0LCB7IG1heExlbmd0aDogMTk1MCwgY2hhcjogXCJcIiB9KTtcclxuICAgICAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQodGV4dFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGRlcnIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IFV0aWwuc3BsaXRNZXNzYWdlKHN0ZGVyciwgeyBtYXhMZW5ndGg6IDE5NTAsIGNoYXI6IFwiXCIgfSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKHRleHRbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==