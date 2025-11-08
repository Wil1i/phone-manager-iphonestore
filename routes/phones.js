let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const buyController = require("../controllers/phones/buyController")
Router.get("/buy", isUserLoggedIn, buyController.get)
Router.post("/buy", isUserLoggedIn, buyController.post)

const selectSellController = require("../controllers/phones/selectSellController")
Router.get("/sell", isUserLoggedIn, selectSellController.get)

const sellController = require("../controllers/phones/sellController")
Router.get("/:id/sell", isUserLoggedIn, sellController.get)
Router.post("/:id/sell", isUserLoggedIn, sellController.post)

const returnController = require("../controllers/phones/returnController")
Router.post("/:id/return", isUserLoggedIn, returnController.post)

const editController = require("../controllers/phones/editController")
Router.get("/:id/edit", isUserLoggedIn, editController.get)
Router.post("/:id/edit", isUserLoggedIn, editController.post)

const singleController = require("../controllers/phones/singleController")
Router.get("/:id", isUserLoggedIn, singleController.get)

const allControllers = require("../controllers/phones/allController")
Router.get("/", isUserLoggedIn, allControllers.get)

module.exports = Router