const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const userId = 'john_doe_17091999';
const email = 'john@xyz.com';
const rollNumber = 'ABCD123';

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const numbers = [];
  const alphabets = [];
  let highestLowercaseAlphabet = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (item.match(/[a-z]/i)) {
      alphabets.push(item);
      if (item.toLowerCase() === item) {
        highestLowercaseAlphabet.push(item);
      }
    }
  });

  highestLowercaseAlphabet = highestLowercaseAlphabet.sort((a, b) => b.localeCompare(a))[0];

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: [highestLowercaseAlphabet],
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});