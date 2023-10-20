const express = require('express');
const router = express.Router();
const data =require('../data/countries.json');

router.get('/', (req, res) =>{
    res.status(200).json(data);
});

router.get('/:countriId', (req, res) =>{
    const requestedCountriId = req.params.countriId;
    const countri = data.countries.filter(countriInData => {
        if(countriInData.id.toString() === requestedCountriId) {
            return countriInData;
        }
    });

    res.status(200).json(countri);
});

module.exports = router;