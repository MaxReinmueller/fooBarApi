const router = require("express").Router();
const testControl = require("../../controllers/testController");

// Matches with "/api"
router.route("/")
  .get(testControl.findAll)
  
module.exports = router;