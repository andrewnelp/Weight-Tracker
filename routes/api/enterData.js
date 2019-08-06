const router = require("express").Router();
const dayDataController = require("../../controllers/dayDataController");

// Matches with "/api/enterData"
router
  .route("/")
  .get(dayDataController.findAll)
  .post(dayDataController.create);

// Matches with "/api/enterData/:id"
router
  .route("/:id")
  .get(dayDataController.findById)
  .put(dayDataController.update)
  .delete(dayDataController.remove);

module.exports = router;
