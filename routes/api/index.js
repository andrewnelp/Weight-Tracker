const router = require("express").Router();
const dayDataRoutes = require("./enterData");

// Book routes
router.use("/enterData", dayDataRoutes);

module.exports = router;
