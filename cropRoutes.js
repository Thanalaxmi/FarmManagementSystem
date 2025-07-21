const express = require('express');
const Crop = require('../models/Crop');
const router = express.Router();

router.get('/', async (req, res) => {
    const crops = await Crop.find();
    res.json(crops);
});

router.post('/', async (req, res) => {
    const crop = new Crop(req.body);
    await crop.save();
    res.json(crop);
});

router.put('/:id', async (req, res) => {
    const updated = await Crop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await Crop.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
