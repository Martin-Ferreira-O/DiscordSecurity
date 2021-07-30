"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEvents = exports.registerCommands = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
async function registerCommands(bot, dir = '') {
    const filePath = path_1.default.join(__dirname, dir);
    const files = await fs_1.promises.readdir(filePath);
    for (const file of files) {
        const stat = await fs_1.promises.lstat(path_1.default.join(filePath, file));
        if (stat.isDirectory())
            registerCommands(bot, path_1.default.join(dir, file));
        if (file.endsWith('.ts')) {
            const Command = await Promise.resolve().then(() => __importStar(require(path_1.default.join(__dirname, dir, file))));
            const cmd = new Command.default();
            bot.commands.set(cmd.name, cmd);
            cmd.alias.forEach((alias) => {
                bot.commands.set(alias, cmd);
            });
        }
    }
}
exports.registerCommands = registerCommands;
async function registerEvents(bot, dir = '') {
    const filePath = path_1.default.join(__dirname, dir);
    const files = await fs_1.promises.readdir(filePath);
    for (const file of files) {
        const stat = await fs_1.promises.lstat(path_1.default.join(filePath, file));
        if (stat.isDirectory())
            registerEvents(bot, path_1.default.join(dir, file));
        if (file.endsWith('.ts')) {
            const eventName = file.substring(0, file.indexOf(".ts"));
            const Event = await Promise.resolve().then(() => __importStar(require(path_1.default.join(__dirname, dir, file))));
            const event = new Event.default();
            bot.events.set(event.name, event);
            bot.client.on(eventName, event.run.bind(null, bot));
        }
    }
}
exports.registerEvents = registerEvents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUN4QiwyQkFBb0M7QUFJcEMsS0FBSyxVQUFVLGdCQUFnQixDQUFDLEdBQVEsRUFBRSxHQUFHLEdBQUcsRUFBRTtJQUM5QyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFFLENBQUMsS0FBSyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sT0FBTyxHQUFHLHdEQUFjLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBQyxDQUFDO1lBQy9ELE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtnQkFDaEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ047S0FDSjtBQUNMLENBQUM7QUFvQkcsNENBQWdCO0FBbEJwQixLQUFLLFVBQVUsY0FBYyxDQUFDLEdBQVEsRUFBRSxHQUFHLEdBQUcsRUFBRTtJQUM1QyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFFLENBQUMsS0FBSyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsTUFBTSxLQUFLLEdBQUcsd0RBQ04sY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFDLENBQUM7WUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7S0FDSjtBQUNMLENBQUM7QUFJRyx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IEJvdCBmcm9tICcuLi9ib3QnO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyQ29tbWFuZHMoYm90OiBCb3QsIGRpciA9ICcnKSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGRpcik7XHJcbiAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnJlYWRkaXIoZmlsZVBhdGgpO1xyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZzLmxzdGF0KHBhdGguam9pbihmaWxlUGF0aCwgZmlsZSkpO1xyXG4gICAgICAgIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHJlZ2lzdGVyQ29tbWFuZHMoYm90LCBwYXRoLmpvaW4oZGlyLCBmaWxlKSk7XHJcbiAgICAgICAgaWYgKGZpbGUuZW5kc1dpdGgoJy50cycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IENvbW1hbmQgPSBhd2FpdCBpbXBvcnQgKHBhdGguam9pbihfX2Rpcm5hbWUsIGRpciwgZmlsZSkpO1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSBuZXcgQ29tbWFuZC5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGJvdC5jb21tYW5kcy5zZXQoY21kLm5hbWUsIGNtZCk7XHJcbiAgICAgICAgICAgIGNtZC5hbGlhcy5mb3JFYWNoKChhbGlhczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBib3QuY29tbWFuZHMuc2V0KGFsaWFzLCBjbWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGJvdDogQm90LCBkaXIgPSAnJykge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBkaXIpO1xyXG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZpbGVQYXRoKTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5sc3RhdChwYXRoLmpvaW4oZmlsZVBhdGgsIGZpbGUpKTtcclxuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSByZWdpc3RlckV2ZW50cyhib3QsIHBhdGguam9pbihkaXIsIGZpbGUpKTtcclxuICAgICAgICBpZiAoZmlsZS5lbmRzV2l0aCgnLnRzJykpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZmlsZS5zdWJzdHJpbmcoMCwgZmlsZS5pbmRleE9mKFwiLnRzXCIpKTtcclxuICAgICAgICAgICAgY29uc3QgRXZlbnQgPSBhd2FpdFxyXG4gICAgICAgICAgICBpbXBvcnQgKHBhdGguam9pbihfX2Rpcm5hbWUsIGRpciwgZmlsZSkpO1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudC5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGJvdC5ldmVudHMuc2V0KGV2ZW50Lm5hbWUsIGV2ZW50KTtcclxuICAgICAgICAgICAgYm90LmNsaWVudC5vbihldmVudE5hbWUsIGV2ZW50LnJ1bi5iaW5kKG51bGwsIGJvdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlZ2lzdGVyQ29tbWFuZHMsXHJcbiAgICByZWdpc3RlckV2ZW50c1xyXG59Il19