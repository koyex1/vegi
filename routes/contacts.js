const express = require('express');
const router = express.Router();

// @route   POST api/contacts
// @desc    Create Contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Create a Contact');
});

// @route   GET api/contacts
// @desc    Get Contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get Contacts');
});

// @route   PUT api/contacts/:id
// @desc    Update a Contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update a Contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a Contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a Contact');
});

module.exports = router;
