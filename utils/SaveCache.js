export class SaveCache {
    /**
     * You need the use client.name = new Map() and then cache = new client.name
     * @param {Map} map The object Map
     */
    constructor(map) {
        this.map = map;
    }

    setDates(name, value) {
        const map = this.map;
        if (!map.has(name)) map.set(name, value);
        else return false;
        return true;
    }
    getDates(name) {
        const map = this.map;
        if (map.has(name)) {
            return map.get(name)
        } else return false;
    }

    deleteDates(name) {
        const map = this.map;
        if (!map.has(name))
            return false;
        else {
            map.delete(name);
            return true;
        }
    }
}