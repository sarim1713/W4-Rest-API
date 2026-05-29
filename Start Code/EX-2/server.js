import app from './app.js';
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});