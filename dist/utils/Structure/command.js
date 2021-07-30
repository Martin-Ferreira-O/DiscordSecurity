"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = CommandBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9TdHJ1Y3R1cmUvY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQXFCLFdBQVc7SUFNNUI7Ozs7OztPQU1HO0lBQ0gsWUFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxLQUFlLEVBQUUsUUFBZ0I7UUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBbkJELDhCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUxhbmd9IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kQmFzZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gICAgYWxpYXM6IHN0cmluZ1tdO1xyXG4gICAgY29vbGRvd246IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGFuZzogSUxhbmc7IFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYmFzZSBvZiB0aGUgY29tbWFuZFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgY29tbWFuZCBcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeSBOYW1lIG9mIHRoZSBjYXRlZ29yeSBcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGFsaWFzIEFycmF5IG9mIGFsaWFzIFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvb2xkb3duIFRoZSBjb29sZG93biBvZiB0aGUgY29tbWFuZCBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nLCBhbGlhczogc3RyaW5nW10sIGNvb2xkb3duOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmFsaWFzID0gYWxpYXM7XHJcbiAgICAgICAgdGhpcy5jb29sZG93biA9IGNvb2xkb3duO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==