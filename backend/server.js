// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const HF_API = "https://api-inference.huggingface.co/models/deepseek-ai/deepseek-coder-1.3b-instruct";

// app.post('/api/query', async (req, res) => {
//   try {
//     const response = await axios.post(HF_API, req.body, {
//       headers: {
//         Authorization: `Bearer ${process.env.HF_API_KEY}`,
//         "Content-Type": "application/json"
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));