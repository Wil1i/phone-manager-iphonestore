const Phone = require("../../models/Phone")

const get = async (req, res) => {
    const findPhone = await Phone.findOne({where : {code : req.params.id}})

    res.render("phones/edit", {phone : findPhone, user : req.user, flash : req.flash()})
}

const post = async (req, res) => {
    const findPhone = await Phone.findOne({where : {code : req.params.id}})

    console.log(req.body.isOwnershipAvailable)

    await findPhone.update({
        customerNumber : req.body.customerNumber,
        customerName : req.body.customerName,
        byUser : req.body.byUser,
        IMEI1 : req.body.IMEI1,
        IMEI2 : req.body.IMEI2,
        phoneModel : req.body.phoneModel,
        status : req.body.status,
        capacity : req.body.capacity,
        color : req.body.color,
        partNumber : req.body.partNumber,
        code : req.body.code,
        code2 : req.body.code2,
        buyPrice : req.body.buyPrice,
        sellPrice : req.body.sellPrice,
        sellDate : req.body.sellDate,
        buyDate : req.body.buyDate,
        buyFrom : req.body.buyFrom,
        buyerNumber : req.body.buyerNumber,
        sellMode : req.body.sellMode,
        isBoxAvailable : req.body.isBoxAvailable == "on" ? true : false,
        isOwnershipAvailable : req.body.isOwnershipAvailable == "on" ? true : false,
        description : req.body.description,
        buyerSettlement : req.body.buyerSettlement,
        isPhoneNotRegistered : req.body.isPhoneNotRegistered == "on" ? true : false,
        battery : req.body.battery,
        cycle : req.body.cycle
    })

    res.redirect(`/phones/${req.body.code}`)
}

module.exports = {
    get,
    post
}