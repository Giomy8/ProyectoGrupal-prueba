const app = require('./app');
const db = require('./db');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});