const Phone = require("../models/Phone")

const get = async (req, res) => {
    let phones = await Phone.findAll()

    let month = new Date().toLocaleDateString('fa-IR-u-nu-latn').split("/")[1];

    const filteredPhones = phones.filter(phone => {
        let sellMonth = phone.sellDate?.split("/")[1]
        let buyMonth = phone.buyDate?.split("/")[1]
        return parseInt(sellMonth) == parseInt(month) || parseInt(buyMonth) == parseInt(month)
    })

    let sood = 0
    let allSell = 0
    let allBuy = 0

    filteredPhones.forEach(f => {
        if (f.sellPrice && f.buyPrice) sood += f.sellPrice - f.buyPrice
        allSell += f.sellPrice
        allBuy += f.buyPrice
    })

    res.render("report", {
        user : req.user,
        flash : req.flash(),
        phones,
        filteredPhones,
        sood,
        allSell,
        allBuy
    })
}

const post = async (req, res) => {

}

module.exports={
    get,
    post
}