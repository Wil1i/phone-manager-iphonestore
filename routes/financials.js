let {Router} = require("express")
const { isUserLoggedIn } = require("../middlewares/auth")
Router = new Router()

const allFinanceController = require("../controllers/financials/allController")
Router.get("/all", isUserLoggedIn, allFinanceController.get)

const newFinanceController = require("../controllers/financials/newController")
Router.get("/new", isUserLoggedIn, newFinanceController.get)
Router.post("/new", isUserLoggedIn, newFinanceController.post)

const singleController = require("../controllers/financials/singleController")
Router.get("/:id", isUserLoggedIn, singleController.get)

module.exports = Router