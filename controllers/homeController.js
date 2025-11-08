const convert = require("../utils/convert")
const Phone = require("../models/Phone")
const {toPersian} = require("../utils/convert")
const {toToday} = require("../utils/date")

const get = async (req, res) => {
  const phones = await Phone.findAll({where : {status : "فروخته شد"}, order : [['id', 'DESC']]})

  res.render("homePage", {
    convert,
    phones,
    toPersian,
    header : undefined,
    toToday,
    user : req.user
  })
}

const post = (req, res) => {

}

module.exports = {
  get,
  post
}