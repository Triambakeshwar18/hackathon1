const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        activePage: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        activePage: 'about'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects',
        activePage: 'projects'
    });
});

app.get('/certifications', (req, res) => {
    res.render('certifications', {
        title: 'Certifications',
        activePage: 'certifications'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        activePage: 'contact'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

