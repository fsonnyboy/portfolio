# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth Framer Motion animations throughout
- **Component Library**: Built with shadcn/ui components for consistency
- **TypeScript**: Full type safety and better development experience
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Accessibility**: Focus management and keyboard navigation
- **Dark Mode**: Automatic dark mode support

## 📋 Sections

- **Navigation**: Smooth scrolling navigation with mobile menu
- **Hero**: Eye-catching introduction with call-to-action
- **About**: Personal story, expertise, and statistics
- **Projects**: Showcase of featured and additional projects
- **Skills**: Technical skills with animated progress bars
- **Contact**: Contact form with validation and contact information
- **Footer**: Social links and additional navigation

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information
Update the following files with your personal information:

- `app/layout.tsx` - Update metadata (title, description, etc.)
- `components/hero-section.tsx` - Update name, title, and social links
- `components/about-section.tsx` - Update personal story and statistics
- `components/contact-section.tsx` - Update contact information
- `components/footer.tsx` - Update social links and contact details

### Projects
Edit `components/projects-section.tsx` to add your projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Next.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true, // Set to true for featured projects
  },
  // Add more projects...
];
```

### Skills
Update `components/skills-section.tsx` to reflect your skills:

```typescript
const skillCategories = [
  {
    title: "Your Skill Category",
    icon: YourIcon,
    skills: [
      { name: "Skill Name", level: 90 }, // Level is percentage
    ],
  },
  // Add more categories...
];
```

### Colors and Styling
The color scheme can be customized in `app/globals.css`:

```css
:root {
  --primary: #3b82f6; /* Your primary color */
  --secondary: #64748b; /* Your secondary color */
  /* ... other colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Flexible grid layouts
- Optimized typography for all screen sizes
- Touch-friendly interactive elements

## 🎨 Animation Features

- Smooth page transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading animations
- Staggered animations for lists
- Parallax-like effects

## 🔧 Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Happy coding!** 🎉