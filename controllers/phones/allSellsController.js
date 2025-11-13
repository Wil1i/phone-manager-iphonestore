const Phone = require("../../models/Phone")
const {toPersian} = require("../../utils/convert")
const {toToday} = require("../../utils/date")

const get = async (req, res) => {
    const sellsPhone = await Phone.findAll({where : {status : "فروخته شد"}})

    res.render("phones/allSells", {
        user : req.user,
        flash : req.flash(),
        phones : sellsPhone,
        toToday,
        toPersian
    })
}

module.exports = {
    get
}