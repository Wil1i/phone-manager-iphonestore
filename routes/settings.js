let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const allController = require("../controllers/settings/getAllController")
Router.get("/", isUserLoggedIn, allController.get)
Router.post("/", isUserLoggedIn, allController.post)

module.exports = Router