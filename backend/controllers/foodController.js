import fs from 'fs';
import foodModel from '../models/foodModel.js';

// ✅ Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image file is required' });
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.filename,
    });

    await food.save();
    res.json({ success: true, message: 'Food Added' });
  } catch (error) {
    console.error('Error adding food:', error);
    res.status(500).json({ success: false, message: 'Error adding food' });
  }
};

// ✅ List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error('Error listing food:', error);
    res.status(500).json({ success: false, message: 'Error listing food' });
  }
};

// ✅ Remove food item by ID
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ success: false, message: 'Food not found' });
    }

    // Delete the image file
    const filePath = `uploads/${food.image}`;
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    } else {
      console.warn(`File not found at path: ${filePath}`);
    }

    // Delete from database
    await foodModel.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: 'Food Removed' });
  } catch (error) {
    console.error('Error removing food:', error);
    res.status(500).json({ success: false, message: 'Error removing food' });
  }
};

export { addFood, listFood, removeFood };
