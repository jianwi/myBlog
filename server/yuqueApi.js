const axios = require("axios");

class YueQue {
    #token
    #user_name
    #zone

    constructor({userName, zone, token}) {
        this.#token = token
        this.#user_name = userName
        this.#zone = zone
    }

    async getList() {
        const url = `https://yuque.com/api/v2/repos/${this.#user_name}/${this.#zone}/docs`
        return axios.get(url, {
                headers: {
                    'X-Auth-Token': this.#token
                }
            }
        )
    }

    async getDoc(slug) {
        const url = `https://yuque.com/api/v2/repos/${this.#user_name}/${this.#zone}/docs/${slug}?raw=1`
        return axios.get(url, {
                headers: {
                    'X-Auth-Token': this.#token
                }
            }
        )
    }
}

module.exports = YueQue