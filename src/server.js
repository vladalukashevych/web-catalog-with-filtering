const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

app.post('/submitForm', (req, res) => {
  const formData = req.body;

  // Append the form data to a JSON file
  const filePath = path.join(__dirname, 'db', 'formData.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!data.trim()) {
        data = '[]';
      }

    const existingData = JSON.parse(data);
    existingData.push(formData);

    fs.writeFile(filePath, JSON.stringify(existingData), 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      res.status(200).json({ message: 'Form data saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
