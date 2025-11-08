const Phone = require("../../models/Phone")
const {toPersian} = require("../../utils/convert")
const {toToday} = require("../../utils/date")

const get = async (req, res) => {
    const phones = await Phone.findAll({where : {status : "موجود در فروشگاه"}})
    res.render("phones/selectSell", {
        user : req.user,
        flash : req.flash(),
        phones,
        toPersian,
        toToday
    })    
}

module.exports = {
    get
}