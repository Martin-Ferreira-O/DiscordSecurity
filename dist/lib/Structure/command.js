"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBase = void 0;
class CommandBase {
    /**
     * The base of the command
     * @param {String} name Name of the command
     * @param {String} category Name of the category
     * @param {String[]} alias Array of alias
     * @param {Number} cooldown The cooldown of the command
     */
    constructor(name, category, alias, cooldown) {
        this.name = name;
        this.category = category;
        this.alias = alias;
        this.cooldown = cooldown;
    }
}
exports.CommandBase = CommandBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvU3RydWN0dXJlL2NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBYSxXQUFXO0lBTXBCOzs7Ozs7T0FNRztJQUNILFlBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsS0FBZSxFQUFFLFFBQWdCO1FBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQW5CRCxrQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMYW5nfSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4JztcclxuZXhwb3J0IGNsYXNzIENvbW1hbmRCYXNlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgICBhbGlhczogc3RyaW5nW107XHJcbiAgICBjb29sZG93bjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYW5nOiBJTGFuZzsgXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBiYXNlIG9mIHRoZSBjb21tYW5kXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjb21tYW5kIFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhdGVnb3J5IE5hbWUgb2YgdGhlIGNhdGVnb3J5IFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gYWxpYXMgQXJyYXkgb2YgYWxpYXMgXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29vbGRvd24gVGhlIGNvb2xkb3duIG9mIHRoZSBjb21tYW5kIFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcsIGFsaWFzOiBzdHJpbmdbXSwgY29vbGRvd246IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcclxuICAgICAgICB0aGlzLmNvb2xkb3duID0gY29vbGRvd247XHJcbiAgICB9XHJcbn1cclxuIl19