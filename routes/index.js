let {Router} = require("express")
const { isUserLoggedIn, isUserNotLoggedIn } = require("../middlewares/auth")
Router = new Router()

const searchController = require("../controllers/searchController")
Router.get("/search", isUserLoggedIn, searchController.get)
Router.post("/search", isUserLoggedIn, searchController.post)

const loginController = require("../controllers/loginController")
Router.get("/auth", isUserNotLoggedIn, loginController.get)
Router.post("/auth", isUserNotLoggedIn, loginController.post, loginController.func)
Router.get("/logout", isUserLoggedIn, loginController.logout)

const reportController = require("../controllers/reportController")
Router.get("/report", isUserLoggedIn, reportController.get)
Router.post("/report", isUserLoggedIn, reportController.post)

const logsController = require("../controllers/logsController")
Router.get("/logs", isUserLoggedIn, logsController.get)

const registerController = require("../controllers/registerController")
Router.post("/register", isUserNotLoggedIn, registerController.post)

const homeController = require("../controllers/homeController")
Router.get("/", isUserLoggedIn, homeController.get)

module.exports = Router