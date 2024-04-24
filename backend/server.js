const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ContactUs', {

});


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);


app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
