const Phone = require("../../models/Phone")
const {toPersian} = require("../../utils/convert")
const {toToday} = require("../../utils/date")

const get = async (req, res) => {
    const phones = await Phone.findAll({where : {status : "موجود در فروشگاه"}, order : [['id', 'DESC']]})

    res.render("phones/all", {
        user : req.user,
        flash : req.flash(),
        phones,
        toPersian,
        toToday
    })
}

module.exports = {
    get,
}