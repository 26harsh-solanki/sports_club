const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({}));
app.use(bodyParser.json());
// Connect to MongoDB Atlas (replace <username>, <password>, and <dbname> with your credentials)
mongoose.connect('mongodb+srv://hsolanki296:whTePKZ9KXd59Pr6@cluster0.rw8moky.mongodb.net/spotsclub?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

// Define a Mongoose schema for the user
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword:String
});

const User = mongoose.model('User', userSchema);

const membershipSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  dob: Date,
  gender: String,
  emergencyContact: String,
  relationship: String,
  emergencyPhone: String
});

const Membership = mongoose.model('Membership', membershipSchema);

// Middleware to parse JSON bodies
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Route for handling signup
app.post('/api/signup', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/login', async (req, res) => {
  console.log("iuhyhy");
    try {
      const { email, password } = req.body;
      console.log(req.body)
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
       password ==user.password
      if (password !=user.password) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
  });

  app.post('/api/membership', async (req, res) => {
    try {
      const newMembership = new Membership(req.body);
      await newMembership.save();
      res.status(201).json({ message: 'Membership form submitted successfully' });
    } catch (error) {
      console.error('Error submitting membership form:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
