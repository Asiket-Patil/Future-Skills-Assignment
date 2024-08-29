const express = require('express');
const app = express();
const cardsRouter = require('./routes/cards');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cors());
app.use('/cards', cardsRouter);

app.get('/ping', (req, res) => {
  res.send('Server is running!');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: 'Internal Server Error' });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
