const axios = require("axios")
const config = require("../configs/config.json")

const send = async (bodyId, to, args) => {
    console.log("------------")
    axios.post(config.apis.send, {bodyId, to, args}).then(res => {console.log(res)}).catch(e => console.log(e))
}

module.exports = {
    send
}