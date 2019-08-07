class Conf {
    static conf = {};
    static setConf(key, value) {
        this.conf[key] = value;
    }
    static getConf(key) {
        return this.conf[key]
    }
}
export default Conf;