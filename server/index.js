const express = require('express');
const router = require('./routes/userRoute');

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());


// routes
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});