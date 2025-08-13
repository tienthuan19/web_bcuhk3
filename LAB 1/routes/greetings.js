const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/dataUtils');

// GET all greetings
router.get('/', (req, res) => {
  try {
    const greetings = readData();
    res.json({
      success: true,
      count: greetings.length,
      data: greetings
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve greetings' });
  }
});

// GET greeting by ID
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    
    const greetings = readData();
    const greeting = greetings.find(g => g.id === id);

    if (!greeting) {
      return res.status(404).json({ error: 'Greeting not found' });
    }
    
    res.json({
      success: true,
      data: greeting
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve greeting' });
  }
});

// POST create greeting
router.post('/', (req, res) => {
  try {
    const { language, greeting, formal } = req.body;
    
    // Validation
    if (!language || !greeting) {
      return res.status(400).json({ error: 'Language and greeting are required' });
    }
    
    const greetings = readData();
    
    // Check for duplicate language
    if (greetings.some(g => g.language.toLowerCase() === language.toLowerCase())) {
      return res.status(400).json({ error: 'Greeting for this language already exists' });
    }
    
    // Generate new ID
    const newId = greetings.length > 0 ? Math.max(...greetings.map(g => g.id)) + 1 : 1;
    
    const newGreeting = {
      id: newId,
      language,
      greeting,
      formal: formal !== undefined ? formal : true
    };
    
    greetings.push(newGreeting);
    writeData(greetings);
    
    res.status(201).json({
      success: true,
      message: 'Greeting created successfully',
      data: newGreeting
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create greeting' });
  }
});

// PUT update greeting
router.put('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    
    const greetings = readData();
    const index = greetings.findIndex(g => g.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Greeting not found' });
    }
    
    const { language, greeting, formal } = req.body;
    
    // Check for duplicate language (excluding current)
    if (language && greetings.some((g, i) => 
        i !== index && g.language.toLowerCase() === language.toLowerCase())) {
      return res.status(400).json({ error: 'Greeting for this language already exists' });
    }
    
    const updatedGreeting = {
      ...greetings[index],
      language: language || greetings[index].language,
      greeting: greeting || greetings[index].greeting,
      formal: formal !== undefined ? formal : greetings[index].formal
    };
    
    greetings[index] = updatedGreeting;
    writeData(greetings);
    
    res.json({
      success: true,
      message: 'Greeting updated successfully',
      data: updatedGreeting
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update greeting' });
  }
});

// DELETE greeting
router.delete('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    
    let greetings = readData();
    const index = greetings.findIndex(g => g.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Greeting not found' });
    }
    
    const [deletedGreeting] = greetings.splice(index, 1);
    writeData(greetings);
    
    res.json({
      success: true,
      message: 'Greeting deleted successfully',
      data: deletedGreeting
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete greeting' });
  }
});

module.exports = router;