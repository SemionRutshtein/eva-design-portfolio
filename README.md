# Eva's Professional Artist Portfolio

A modern, responsive landing page showcasing Eva's drawing and illustration work. Built with semantic HTML, modern CSS, and vanilla JavaScript for optimal performance and accessibility.

## 🎨 Features

- **Responsive Design** - Looks great on all devices
- **Portfolio Gallery** - Filterable showcase with lightbox viewing
- **Contact Form** - Professional inquiry system
- **Performance Optimized** - Fast loading with image optimization
- **SEO Friendly** - Structured data and meta tags
- **Accessibility** - WCAG compliant design

## 📁 Project Structure

```
eva_gallery_page/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   └── placeholder-generator.js  # Temporary placeholder system
│   └── images/             # Image assets directory
│       └── portfolio/      # Portfolio artwork images
├── reference/              # Reference materials
└── README.md              # This file
```

## 🚀 Getting Started

1. **Replace Placeholder Images**
   - Add your actual artwork to `assets/images/`
   - Hero image: `assets/images/hero-artwork.jpg`
   - Your portrait: `assets/images/eva-portrait.jpg`
   - Portfolio pieces: `assets/images/portfolio/`

2. **Update Content**
   - Edit the About section in `index.html`
   - Update contact information
   - Modify service descriptions and pricing

3. **Portfolio Management**
   - Edit the `portfolioData` array in `assets/js/main.js`
   - Add your artwork details (title, category, medium, year, description)
   - Organize by categories: portraits, illustrations, commercial

## 🖼️ Adding Your Artwork

### Portfolio Images
1. Save images in `assets/images/portfolio/` with descriptive filenames
2. Recommended sizes: 400-800px wide for optimal loading
3. Use WebP format for better compression (with JPG fallbacks)

### Update Portfolio Data
Edit the `portfolioData` array in `assets/js/main.js`:

```javascript
{
    id: 10,
    title: "Your Artwork Title",
    category: "portraits", // or "illustrations", "commercial"
    medium: "Graphite on Paper",
    year: "2024",
    image: "assets/images/portfolio/your-image.jpg",
    description: "Description of your artwork and technique used."
}
```

## 🎨 Customization

### Colors
Update CSS custom properties in `assets/css/styles.css`:
```css
:root {
  --primary-color: #1a1a1a;      /* Main text color */
  --accent-color: #8b4513;       /* Brand accent color */
  --secondary-color: #f8f8f8;    /* Light background */
  /* ... other colors */
}
```

### Typography
The site uses Google Fonts (Inter + Playfair Display). To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify the font variables in CSS

### Content Sections
- **Hero Section**: Update title, subtitle, and description
- **About Section**: Replace with your biography and credentials
- **Services**: Modify offerings and pricing
- **Contact**: Update email, social links, and form destination

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px  
- **Desktop**: > 768px

## 🔧 Technical Features

### Performance
- Lazy loading images
- Optimized CSS with custom properties
- Minimal JavaScript dependencies
- Preloading critical resources

### SEO & Accessibility
- Semantic HTML structure
- Alt text for all images
- ARIA labels where needed
- Open Graph meta tags
- JSON-LD structured data

### Interactive Features
- Smooth scrolling navigation
- Portfolio filtering system
- Lightbox image viewing
- Form validation
- Mobile-friendly hamburger menu

## 📞 Contact Form Setup

The contact form currently shows a success message for demo purposes. To make it functional:

1. **Using a Form Service** (Recommended)
   - Services like Netlify Forms, Formspree, or EmailJS
   - Update the form action attribute
   - Modify the JavaScript submission handling

2. **Custom Backend**
   - Set up a server endpoint to handle form submissions
   - Update the form submission code in `main.js`

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable Pages in repository settings
3. Select main branch as source

### Netlify
1. Connect your GitHub repository
2. Deploy automatically on push
3. Enable form handling if using Netlify Forms

### Custom Hosting
Upload all files to your web server's public directory.

## 🎯 SEO Optimization

### Before Launch
- [ ] Update all meta descriptions
- [ ] Add favicon files
- [ ] Verify all images have alt text
- [ ] Test page speed with Google PageSpeed Insights
- [ ] Submit sitemap to Google Search Console

### Content Tips
- Write compelling, keyword-rich descriptions
- Use descriptive filenames for images
- Keep page load times under 3 seconds
- Ensure mobile usability

## 🔄 Maintenance

### Regular Updates
- Add new portfolio pieces quarterly
- Update pricing and services as needed
- Monitor contact form submissions
- Check for broken links and images

### Performance Monitoring
- Use Google Analytics for visitor insights
- Monitor Core Web Vitals
- Test across different browsers regularly

## 💡 Tips for Success

1. **High-Quality Images**: Your artwork is the star - use professional photography
2. **Consistent Updates**: Fresh content improves SEO and visitor engagement
3. **Fast Loading**: Optimize images and test on slower connections
4. **Clear Call-to-Actions**: Make it easy for clients to contact you
5. **Professional Email**: Use a custom domain email address

## 📞 Support

For technical questions or customizations:
- Review the code comments for guidance
- Test changes on a staging environment first
- Keep backups of your customizations

---

**Built with ❤️ for Eva's artistic journey**

*Remember: Your artwork tells the story, the website just makes it accessible to the world.*