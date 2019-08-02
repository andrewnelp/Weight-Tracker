const router = require("express").Router();
const dayDataController = require("../../controllers/dayDataController");
let enterData = require("../../models");

// router.get("/add", (req, res) => res.send("Test route"));
// router.post("/add", (req, res) => {
//   console.log(req.body);
//   res.send("Test route");
// });

// Matches with "/api/dayData"
router
  .route("/")
  .get(dayDataController.findAll)
  .post(dayDataController.create);

// Matches with "/api/dayData/:id"
router
  .route("/:id")
  .get(dayDataController.findById)
  .put(dayDataController.update)
  .delete(dayDataController.remove);

// router.route("/").get((req, res) => {
//   enterData
//     .find()
//     .then(data => res.json(data))
//     .catch(err => res.status(400).json("Error: " + err));
// });

// router.route("/add").post((req, res) => {
//   const date = Date.parse(req.body.date);
//   const weight = Number(req.body.weight);
//   const steps = Number(req.body.steps);
//   const activity = req.body.activity;
//   const duration = Number(req.body.duration);
//   const feel = Number(req.body.feel);
//   const fasting = Number(req.body.fasting);
// });

// const newDayData = new enterData({
//   date,
//   weight,
//   steps,
//   activity,
//   duration,
//   feel,
//   fasting,
//   diettype
// });

// newDayData
//   .save()
//   .then(() => res.json("new Day Data Added!"))
//   .catch(err => res.status(400).json("Error: " + err));

module.exports = router;
