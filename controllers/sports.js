const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllSports = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('sports').find();
    result.toArray().then((sports) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(sports);
    })
};

const getSingleSport = async (req, res) => {
    const sportsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('sports').find({ _id: sportsId });
    result.toArray().then((sports) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(sports[0]);
    })
};

const updateSport = async (req, res) => {
    const sportsId = new ObjectId(req.params.id);
    const sport = {
        sport: req.body.sport,
        type: req.body.type,
        equipment: req.body.equipment,
        exercise: req.body.exercise,
        location: req.body.location,
        league: req.body.league,
        player: req.body.player
    }
    const response = await mongodb.getDatabase().db().collection('sports').replaceOne({ _id: sportsId }, sport);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the sport.');
    }
}

const createSport = async (req, res) => {
    const sport = {
        sport: req.body.sport,
        type: req.body.type,
        equipment: req.body.equipment,
        exercise: req.body.exercise,
        location: req.body.location,
        league: req.body.league,
        player: req.body.player
    }
    const response = await mongodb.getDatabase().db().collection('sports').insertOne(sport);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the sport.');
    }
}

const deleteSport = async (req, res) => {
    const sportsId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('sports').deleteOne({ _id: sportsId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the sport.');
    }
}

module.exports = {
    getAllSports,
    getSingleSport,
    createSport, 
    updateSport,
    deleteSport
}