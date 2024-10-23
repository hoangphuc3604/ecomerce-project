const authControllers = require("../controllers/authControllers");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/admin-login", authControllers.adminLogin);
router.get("/get-info", authMiddleware, authControllers.getUser);
router.post("/user-register", authControllers.userRegister);
router.post("/user-login", authControllers.userLogin);

module.exports = router;
