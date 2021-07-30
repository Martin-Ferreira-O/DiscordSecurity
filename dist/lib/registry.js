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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3JlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsMkJBQW9DO0FBSXBDLEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxHQUFRLEVBQUUsR0FBRyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLE9BQU8sR0FBRyx3REFBYyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUMsQ0FBQztZQUMvRCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztTQUNOO0tBQ0o7QUFDTCxDQUFDO0FBb0JHLDRDQUFnQjtBQWxCcEIsS0FBSyxVQUFVLGNBQWMsQ0FBQyxHQUFRLEVBQUUsR0FBRyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sS0FBSyxHQUFHLHdEQUNOLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBQyxDQUFDO1lBQ3pDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0o7QUFDTCxDQUFDO0FBSUcsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCBCb3QgZnJvbSAnLi4vYm90JztcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlckNvbW1hbmRzKGJvdDogQm90LCBkaXIgPSAnJykge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBkaXIpO1xyXG4gICAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZpbGVQYXRoKTtcclxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBmcy5sc3RhdChwYXRoLmpvaW4oZmlsZVBhdGgsIGZpbGUpKTtcclxuICAgICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSByZWdpc3RlckNvbW1hbmRzKGJvdCwgcGF0aC5qb2luKGRpciwgZmlsZSkpO1xyXG4gICAgICAgIGlmIChmaWxlLmVuZHNXaXRoKCcudHMnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBDb21tYW5kID0gYXdhaXQgaW1wb3J0IChwYXRoLmpvaW4oX19kaXJuYW1lLCBkaXIsIGZpbGUpKTtcclxuICAgICAgICAgICAgY29uc3QgY21kID0gbmV3IENvbW1hbmQuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBib3QuY29tbWFuZHMuc2V0KGNtZC5uYW1lLCBjbWQpO1xyXG4gICAgICAgICAgICBjbWQuYWxpYXMuZm9yRWFjaCgoYWxpYXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm90LmNvbW1hbmRzLnNldChhbGlhcywgY21kKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlckV2ZW50cyhib3Q6IEJvdCwgZGlyID0gJycpIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgZGlyKTtcclxuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucmVhZGRpcihmaWxlUGF0aCk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICBjb25zdCBzdGF0ID0gYXdhaXQgZnMubHN0YXQocGF0aC5qb2luKGZpbGVQYXRoLCBmaWxlKSk7XHJcbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkgcmVnaXN0ZXJFdmVudHMoYm90LCBwYXRoLmpvaW4oZGlyLCBmaWxlKSk7XHJcbiAgICAgICAgaWYgKGZpbGUuZW5kc1dpdGgoJy50cycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGZpbGUuc3Vic3RyaW5nKDAsIGZpbGUuaW5kZXhPZihcIi50c1wiKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IEV2ZW50ID0gYXdhaXRcclxuICAgICAgICAgICAgaW1wb3J0IChwYXRoLmpvaW4oX19kaXJuYW1lLCBkaXIsIGZpbGUpKTtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBib3QuZXZlbnRzLnNldChldmVudC5uYW1lLCBldmVudCk7XHJcbiAgICAgICAgICAgIGJvdC5jbGllbnQub24oZXZlbnROYW1lLCBldmVudC5ydW4uYmluZChudWxsLCBib3QpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICByZWdpc3RlckNvbW1hbmRzLFxyXG4gICAgcmVnaXN0ZXJFdmVudHNcclxufSJdfQ==