const router = require('express').Router();
const db = require('../models');

const {Fitness} = db;

router.post('/', async (req, res) => {
    const data = await Fitness.create(req.body);
    res.json(data);
})

router.get('/', async (req, res) => {
    const data = await Fitness.findAll();
    res.json(data);
})

router.get('/:fitnessId', async (req, res) => {
    const data = await Fitness.findByPk(req.params.fitnessId);
    res.json(data);
});


router.put('/:fitnessId', async (req, res) => {
    let fitnessId = Number(req.params.fitnessId)
    if (isNaN(fitnessId)) {
        res.status(400).json({message: 'ID invalid'})
    } else {
        const fitness = await Fitness.findOne({where: {fitnessId: fitnessId}})
        if (!fitness) {
            res.status(404).json({message: 'Fitness not found'})
        } else {
            Object.assign(fitness, req.body);
            await fitness.save();
            res.json(fitness);
        }
    }
})

router.delete('/:fitnessId', async (req, res) => {
    let fitnessId = Number(req.params.fitnessId)
    if (isNaN(fitnessId)) {
        res.status(400).json({message: 'ID invalid'})
    } else {
        const fitness = await Fitness.findOne({where: {fitnessId: fitnessId}})
        if (!fitness) {
            res.status(404).json({message: 'Fitness not found'})
        } else {
            await fitness.destroy();
            res.json(fitness);
        }
    }
})

module.exports = router