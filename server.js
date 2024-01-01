const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint to fetch weather data
app.get('/weather', async (req, res) => {
  try {
    // Make a request to the weather API
    const weatherResponse = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=44.54&lon=10.99&appid=ab84df1c84547d5407880a81a28cec9e'
    );

    if (weatherResponse.status === 200) {
      const weatherData = weatherResponse.data;
      res.json(weatherData);
    } else {
      throw new Error('Weather API request failed');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
