const express = require("express");
const { getAllUsers, getAUser, addAUser, updateAUser, deleteAUser } = require("../controllers/userControllers");
const router = express.Router();

router.get('/', getAllUsers);

router.get('/:userId', getAUser);

router.post('/', addAUser);

router.put('/:userId', updateAUser);

router.delete('/:userId', deleteAUser);

module.exports = router;
