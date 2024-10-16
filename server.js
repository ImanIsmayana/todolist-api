const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./models');
const authMiddleware = require('./middlewares/auth');
const authRoutes = require('./routes/auth.ro');
const checklistRoutes = require('./routes/checklist.ro');
const checklistItemRoutes = require('./routes/checklist_item.ro');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', authRoutes);
app.use('/checklist', checklistRoutes);
app.use('/checklist', checklistItemRoutes);

app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Success GET /protected', user: req.user });
});

// Start server and sync database
const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});