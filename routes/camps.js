const express = require("express");
const { asyncHandler, campNotFoundError } = require("../utils");
const { requireAuth } = require("../auth");
const { Campsite } = require("../db/models");

const router = express.Router();

//Get all camps
router.get("/", asyncHandler(async (req, res, next) => {
    const campSites = await Campsite.findAll();

    res.json({ campSites });
}));


module.exports = router;
