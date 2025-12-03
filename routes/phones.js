let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const buyController = require("../controllers/phones/buyController")
Router.get("/buy", isUserLoggedIn, buyController.get)
Router.post("/buy", isUserLoggedIn, buyController.post)

const allSellsController = require("../controllers/phones/allSellsController")
Router.get("/sells", isUserLoggedIn, allSellsController.get)

const selectSellController = require("../controllers/phones/selectSellController")
Router.get("/sell", isUserLoggedIn, selectSellController.get)

const sellController = require("../controllers/phones/sellController")
Router.get("/:id/sell", isUserLoggedIn, sellController.get)
Router.post("/:id/sell", isUserLoggedIn, sellController.post)

const editController = require("../controllers/phones/editController")
Router.get("/:id/edit", isUserLoggedIn, editController.get)
Router.post("/:id/edit", isUserLoggedIn, editController.post)

const singleController = require("../controllers/phones/singleController")
Router.get("/:id", singleController.get)

const allControllers = require("../controllers/phones/allController")
Router.get("/", isUserLoggedIn, allControllers.get)

module.exports = Router