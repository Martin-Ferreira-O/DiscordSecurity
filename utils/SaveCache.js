class SaveCache {
    /**
     * 
     * @param {Class} client La clase client para obtenerlos de manera mas rapida y eficiente.
     * @param {String} name Nombre de los objetos que guardaremos en el cache 
     */
    constructor(client, name, map) {
        this.client = client;
        this.name = name;
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
    init() {
        const client = this.client;
        const map = this.map;
        client.getName() = map;
    }
    getName() {
        return this.name;
    }
}