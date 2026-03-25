const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

// サイトデータを返すAPI
app.get('/api/sites', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/sites.json', 'utf8'));
  res.json(data);
});

// 動作確認用
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Demand API is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
