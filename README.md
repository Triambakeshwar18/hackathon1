# Personal Portfolio Website

A modern, responsive personal portfolio website built with Node.js, Express.js, and EJS templating engine. This portfolio showcases professional information, projects, certifications, and contact details in a clean, professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Mobile-friendly navigation
  - Project filtering system
  - FAQ accordion
  - Contact form with validation
  - Smooth scrolling
  - Back-to-top button
- **Multiple Sections**:
  - Hero section with personal introduction
  - About page with experience timeline
  - Projects showcase with filtering
  - Certifications and achievements
  - Contact form and information
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Semantic HTML structure

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📁 Project Structure

```
portfolio-website/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── README.md             # Project documentation
├── views/                # EJS templates
│   ├── layout.ejs        # Main layout template
│   ├── index.ejs         # Home page
│   ├── about.ejs         # About page
│   ├── projects.ejs      # Projects page
│   ├── certifications.ejs # Certifications page
│   └── contact.ejs       # Contact page
└── public/               # Static assets
    ├── css/
    │   └── style.css     # Main stylesheet
    ├── js/
    │   └── script.js     # JavaScript functionality
    └── images/           # Image assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git installed
   git clone <repository-url>
   cd portfolio-website
   
   # Or simply download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio.

## ⚙️ Configuration

### Personalizing Your Portfolio

1. **Update Personal Information**
   - Edit the content in each EJS template file in the `views/` directory
   - Replace placeholder text with your actual information
   - Update the navigation title in `views/layout.ejs`

2. **Add Your Images**
   - Place your profile photo in `public/images/profile.jpg`
   - Add project screenshots to `public/images/`
   - Update image references in the templates

3. **Customize Colors and Styling**
   - Modify CSS variables in `public/css/style.css`
   - Update the color scheme in the `:root` selector

4. **Update Contact Information**
   - Edit contact details in `views/contact.ejs`
   - Update social media links in `views/layout.ejs`

### Key Files to Customize

- `views/index.ejs` - Homepage content
- `views/about.ejs` - About page and experience
- `views/projects.ejs` - Project showcase
- `views/certifications.ejs` - Certifications and achievements
- `views/contact.ejs` - Contact information and form
- `public/css/style.css` - Styling and colors

## 📝 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon (auto-restart)

## 🌐 Deployment

### Deploy to Heroku

1. Create a `Procfile` in the root directory:
   ```
   web: node server.js
   ```

2. Initialize git repository and deploy:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku create your-portfolio-name
   git push heroku main
   ```

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project (if needed)
2. Upload the entire project folder to Netlify
3. Set the build command and publish directory

## 🎨 Customization Guide

### Adding New Sections

1. Create a new route in `server.js`:
   ```javascript
   app.get('/new-section', (req, res) => {
       res.render('new-section', {
           title: 'New Section',
           activePage: 'new-section'
       });
   });
   ```

2. Create the corresponding EJS template in `views/new-section.ejs`

3. Add navigation link in `views/layout.ejs`

### Styling Guidelines

- Use CSS custom properties (variables) for consistent theming
- Follow the existing naming conventions
- Maintain responsive design principles
- Test on multiple devices and browsers

### Adding Projects

1. Edit `views/projects.ejs`
2. Add new project items with the following structure:
   ```html
   <div class="project-item" data-category="web">
       <div class="project-image">
           <img src="/images/project-name.jpg" alt="Project Name">
       </div>
       <div class="project-content">
           <h3>Project Name</h3>
           <p>Project description</p>
           <div class="project-tech">
               <span class="tech-tag">Technology</span>
           </div>
       </div>
   </div>
   ```

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change the port in `server.js` or kill the process using the port

2. **Images not loading**
   - Check file paths and ensure images are in the correct directory
   - Verify image file names match the references in templates

3. **Styling not applied**
   - Clear browser cache
   - Check if CSS file is being served correctly

4. **JavaScript not working**
   - Check browser console for errors
   - Ensure JavaScript file is loaded correctly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:

- Open an issue on GitHub
- Contact me through the portfolio contact form
- Check the documentation above

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Admin panel for content management
- [ ] Database integration
- [ ] Email functionality for contact form
- [ ] Analytics integration
- [ ] Performance monitoring

---

**Happy coding! 🚀**

Remember to replace all placeholder content with your actual information and customize the design to match your personal brand.


