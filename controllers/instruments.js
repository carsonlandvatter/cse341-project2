const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllInstruments = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('instruments').find();
    result.toArray().then((instruments) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(instruments);
    })
};

const getSingleInstrument = async (req, res) => {
    const instrumentsId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('instruments').find({ _id: instrumentsId });
    result.toArray().then((instruments) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(instruments[0]);
    })
};

module.exports = {
    getAllInstruments,
    getSingleInstrument
}