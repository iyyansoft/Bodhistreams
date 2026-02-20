# BodhiStreams Website - Complete Setup Guide

## 🚀 Quick Start Guide

### Step 1: Extract the Project
1. Download and extract the `bodhistreams-website` folder
2. Open your terminal/command prompt
3. Navigate to the project directory:
   ```bash
   cd bodhistreams-website
   ```

### Step 2: Install Node.js (if not installed)
- Download from: https://nodejs.org/
- Install LTS version (18.x or higher)
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- React 18
- React Router DOM
- Framer Motion
- Vite

### Step 4: Run Development Server
```bash
npm run dev
```

The website will be available at: http://localhost:3000

### Step 5: Build for Production
```bash
npm run build
```

The optimized production files will be in the `dist` folder.

## 📋 Project Overview

### Pages Structure
- **Home (/)** - Landing page with hero slider
- **About (/about)** - Company information and values
- **Services (/services)** - Service offerings and process
- **Contact (/contact)** - Contact form and information

### Key Components
- **Navbar** - Fixed navigation with smooth scroll
- **Footer** - Company information and links
- **Hero Sections** - Unique hero for each page
- **Animated Cards** - Smooth hover effects
- **Contact Form** - Functional form with validation

### Color Palette
- Primary: #8CC63F (BodhiStreams Green)
- Secondary: #FFFFFF (White)
- Text: #2C2C2C (Dark Gray)
- Background: #F8F9FA (Light Gray)

## 🎨 Customization Guide

### 1. Change Company Logo
Replace `/public/logo.jpeg` with your logo file

### 2. Update Contact Information
Edit `/src/components/Footer.jsx`:
```jsx
<a href="mailto:your-email@company.com">your-email@company.com</a>
<a href="tel:+919876543210">+91 987 654 3210</a>
```

Also update in `/src/pages/Contact.jsx`

### 3. Modify Colors
Edit `/src/styles/global.css`:
```css
:root {
  --primary-color: #8CC63F;
  --white: #FFFFFF;
  --text-dark: #2C2C2C;
}
```

### 4. Update Content
- **Home Page:** `/src/pages/Home.jsx`
- **About Page:** `/src/pages/About.jsx`
- **Services Page:** `/src/pages/Services.jsx`
- **Contact Page:** `/src/pages/Contact.jsx`

### 5. Change Images
Replace image URLs in page files. Current images are from Unsplash:
- Find and replace URLs like: `https://images.unsplash.com/photo-...`
- Use your own images or stock photos

## 🔧 Advanced Configuration

### Adding New Pages
1. Create new page component in `/src/pages/`
2. Add route in `/src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `/src/components/Navbar.jsx`

### Customizing Animations
Edit Framer Motion variants in page files:
```jsx
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
```

### SEO Optimization
Update `/index.html`:
```html
<title>Your Company Name</title>
<meta name="description" content="Your description">
```

## 📱 Mobile Responsiveness

The website is responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment Options

### Option 1: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload contents of `dist` folder to your web server

## 🔍 Troubleshooting

### Issue: npm install fails
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Issue: Port 3000 already in use
**Solution:** Stop other applications using port 3000 or change port in `vite.config.js`

### Issue: Images not loading
**Solution:** Check image URLs are accessible or replace with local images

### Issue: Build fails
**Solution:** Check for syntax errors, ensure all dependencies are installed

## 📞 Support

For technical support:
- Email: info@bodhistreams.com
- Phone: +91 123 456 7890

## 🎯 Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before upload
   - Use appropriate dimensions

2. **Code Splitting:**
   - Already implemented with React Router

3. **Lazy Loading:**
   - Images load as user scrolls

4. **Caching:**
   - Vite automatically handles caching

## ✅ Checklist Before Going Live

- [ ] Update all company information
- [ ] Replace placeholder contact details
- [ ] Test all navigation links
- [ ] Verify form submission works
- [ ] Check responsive design on mobile
- [ ] Test on different browsers
- [ ] Optimize images
- [ ] Update SEO meta tags
- [ ] Add Google Analytics (optional)
- [ ] Test contact form functionality
- [ ] Review all content for accuracy

## 🌟 Features Highlight

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on cards and buttons
- Auto-rotating hero slider

### User Experience
- Sticky navigation
- Mobile-friendly hamburger menu
- Smooth scrolling
- Fast page loads

### Professional Design
- Clean typography
- Spacious layouts
- Consistent color scheme
- Premium aesthetic

## 📚 Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Styling:** Pure CSS3
- **Icons:** Unicode/Emoji (lightweight)

## 🔐 Security Notes

- No sensitive data in client-side code
- Form validation implemented
- HTTPS recommended for production
- Regular dependency updates recommended

---

**Need Help?** Contact the development team at support@bodhistreams.com

**Version:** 1.0.0
**Last Updated:** 2024

Built with ❤️ for BodhiStreams Convergence Pvt Ltd
