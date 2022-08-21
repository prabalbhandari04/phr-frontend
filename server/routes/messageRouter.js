const router = require('express').Router();
const Message = require('../models/messageModel');


// new message 
router.post('/new', async (req, res) => {

    const newMessage = new Message({
        conversationId: req.body.conversationId,
        sender: req.body.sender,
        text: req.body.text,
    }); 

    try {
        const savedMessage = await newMessage.save();
        res.send(savedMessage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  },

  // get messages of conversation
  router.get('/:conversationId', async (req, res) => {
    try {
      const messages = await Message.find({
        conversationId: req.params.conversationId,
      });
      res.send(messages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }


  ))

// get conv of user 



module.exports = router;