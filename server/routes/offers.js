const express = require("express");
const router = express.Router();
const Offer = require("../models/offer");

// // Getting all
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Getting One
// router.get("/:id", getApplication, (req, res) => {
//   res.json(res.application);
// });

// Creating one
router.post("/", async (req, res) => {
  const offer = new Offer({
    poste: req.body.poste,
    entreprise: req.body.entreprise,
    place: req.body.place,
    tags: req.body.tags,
    description: req.body.description,
    mission: req.body.mission,
    profile: req.body.profile,
    howToApply: req.body.howToApply,
  });
  try {
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// router.patch("/:id", getApplication, async (req, res) => {
//   if (req.body.name != null) {
//     res.application.name = req.body.name;
//   }
//   if (req.body.age != null) {
//     res.application.age = req.body.age;
//   }
//   if (req.body.phoneNumber != null) {
//     res.application.phoneNumber = req.body.phoneNumber;
//   }
//   if (req.body.email != null) {
//     res.application.email = req.body.email;
//   }
//   if (req.body.letter != null) {
//     res.application.letter = req.body.letter;
//   }
//   if (req.body.status != null) {
//     res.application.status = req.body.status;
//   }
//   try {
//     const updatedApplication = await res.application.save();
//     res.json(updatedApplication);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

async function getOffer(req, res, next) {
  let offer;
  try {
    offer = await Offer.findById(req.params.id);
    if (offer == null) {
      return res.status(404).json({ message: "Cannot find offer" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.offer = offer;
  next();
}

module.exports = router;
