const router = require('express').Router();
const axios = require('axios');

const multichain = require('../utils/multichain');

router.post('/', async(req, res, next) => {
    const {
        form: {
            count,
            username
        },
        seats
     } = req.body;

    // [
    //     {
    //         "id": 1,
    //         "form": {
    //             "count": 2,
    //             "username": "Monika"
    //         },
    //         "seats": [12, 13, 11, 11]
    //     }
    // ]
});





module.exports = router;
