const Request = require("../models/Phone")
const {toPersian} = require("../utils/convert")
const {toToday} = require("../utils/date")

const get = async (req, res) => {
    res.render("search", {
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    let findBox = await Request.findAll()

    findBox = findBox.filter(box => box.IMEI1.endsWith(req.body.code) || box.IMEI2.endsWith(req.body.code) || box.code == req.body.code || box.code2 == req.body.code)

    res.render("homePage", {phones : findBox, toPersian, toToday, user : req.user, header : "استعلام دستگاه"})
}

module.exports = {
    get,
    post
}