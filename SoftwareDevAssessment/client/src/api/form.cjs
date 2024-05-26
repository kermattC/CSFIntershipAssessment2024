const express = require('express');
const router = express.Router();

// use the form schema
const Form = require('./../models/form.cjs')

// posts the form data to the data store
router.post('/sendForm', (req, res) => {
    let {user, breed, numDogs, email} = req.body
    console.log("username: ", user)
    
    const newForm = new Form ({
        user,
        breed,
        numDogs,
        email
    })
    
    newForm.save().then(result => {
        res.status(200)
            .json({
                status: "SUCESS",
                message: "Form posted",
                data: result
            })
        }
    )
    .catch(err => {
        res.json({
            status: "FAILED",
            message: "An error occurred: ", err
        })
    })
})

// gets all form responses from collection
router.get('/getResponses', async (req, res) => {
    try {
        const responses = await Form.find();
        res.status(200).json({
            status: "SUCCESS",
            message: "Fetched all responses",
            data: responses
        });
    } catch (err) {
        res.status(500).json({
            status: "FAILED",
            message: "An error occurred", err
        });
    }
});

// gets a response that has a specific id
router.get('/getResponse/:id', async (req, res) => {
    try {
        const response = await Form.findById(req.params.id);
        if (response) {
            res.status(200).json({
                status: "SUCCESS",
                message: "Fetched response by ID",
                data: response
            });
        } else {
            res.status(404).json({
                status: "FAILED",
                message: "Response not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            status: "FAILED",
            message: "An error occurred", err
        });
    }
});

module.exports = router;