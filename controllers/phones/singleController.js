const Phone = require("../../models/Phone")
const {toPersian} = require("../../utils/convert")

const get = async (req, res) => {
    const findPhone = await Phone.findOne({where : {code : req.params.id}})
    if(!findPhone){
        req.flash("err", "گوشی مورد نظر یافت نشد.")
        return res.redirect("/phones")
    }

    res.render("phones/single", {
        user : req.user,
        flash : req.flash(),
        phone : findPhone,
        toPersian
    })
}

const post = async (req, res) => {

}

module.exports = {
    get,
    post
}