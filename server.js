const express = require('express');
const usersRouter = require('./routes/api/users');
const postRouter = require('./routes/api/post');
const authRouter = require('./routes/api/auth');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
//이렇게 함으로써 모든 incoming body request들에 대해서 parse를 자동적으로 해줌
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));
// Define Routes
app.use('/api/users', usersRouter);
app.use('/api/post', postRouter);
app.use('/api/auth', authRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
