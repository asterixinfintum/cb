import express from 'express';
const { body, validationResult } = require('express-validator');
const router = express.Router();
const messageroute = router;

import Message from "./message";

messageroute.post('/api/message',  
        body('email').isLength({ min: 3 }), 
        body('email').isEmail(),
        body('name').isLength({ min: 3 }), 
        body('phone').isLength({ min: 6 }), 
        async (req, res) => {
            const message = new Message(req.body);

            try {
                await message.save();
                res.status(201).send({ message: 'message sent' });
            } catch (error) {
                res.status(400).send({error: error});
            }
});

messageroute.get('/api/message', (req, res) => {
    Message.find().then(messages => {
        res.status(201).send({ 
            messages
        });
    })
})

export default messageroute;