const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllInstruments = async (req, res) => {
    //#swagger.tags=['Instruments']
   try {
           const result = await mongodb
           .getDatabase()
           .db()
           .collection('instruments')
           .find()
           .toArray();
   
           if (result.length === 0) {
               return res.status(400).json({error: 'Instruments not found'})
           }
   
           res.status(200).json(result);

       } catch (err) {
           res.status(500).json({ error: 'Server error'})
       }
};

const getSingleInstrument = async (req, res) => {
    //#swagger.tags=['Instruments']
    try {
            const instrumentsId = new ObjectId(req.params.id);
            const result = await mongodb
            .getDatabase()
            .db()
            .collection('instruments')
            .find({ _id: instrumentsId })
            .toArray()
    
            if (result.length === 0) {
                return res.status(400).json({error: 'Instrument not found'})
            }
    
            res.status(200).json(result)
    
        } catch (err) {
            res.status(500).json({ error: 'Server error'})
        }
};

const updateInstrument = async (req, res) => {
    //#swagger.tags=['Instruments']
    try {
        const instrumentId = new ObjectId(req.params.id);
        const instrument = {
        instrument: req.body.instrument,
        type: req.body.type
        }
        const response = await mongodb.getDatabase().db().collection('instruments').replaceOne({ _id: instrumentId }, instrument);

        if (response.modifiedCount > 0) {
            res.status(204).send();
    } 
    } catch (err) {
        res.status(500).json(response.error || 'Some error occurred while updating the instrument.');
    }
}

const createInstrument = async (req, res) => {
    //#swagger.tags=['Instruments']
    try {
        const instrument = {
        instrument: req.body.instrument,
        type: req.body.type
        }
        const response = await mongodb.getDatabase().db().collection('instruments').insertOne(instrument);
        if (response.acknowledged > 0) {
            res.status(204).send();
        } 

    } catch (err) {
        res.status(500).json(response.error || 'Some error occurred while creating the instrument.');
    }
}

const deleteInstrument = async (req, res) => {
    //#swagger.tags=['Instruments']
    try {
        const instrumentId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('instruments').deleteOne({ _id: instrumentId });

        if (response.deletedCount > 0) {
        res.status(204).send();
        } 
    } catch (err) {
        res.status(500).json(response.error || 'Some error occurred while deleting the instrument.');
    }
}

module.exports = {
    getAllInstruments,
    getSingleInstrument,
    updateInstrument,
    createInstrument,
    deleteInstrument
}