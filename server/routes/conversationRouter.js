const router = require('express').Router();
const Conversation = require('../models/conversationModel');

// new conv 
router.post('/new', async (req, res) => {
    const newConversation = new Conversation({
      members : [req.body.senderId, req.body.receiverId],
    });

    try {
      const savedConversation = await newConversation.save();
      res.send(savedConversation);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
  },


  // get conv of user
  router.get('/:userId', async (req, res) => {
    try {
      const conversations = await Conversation.find({
        members: {
          $in: [req.params.userId],
        },
      });
      res.send(conversations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

));
module.exports = router;