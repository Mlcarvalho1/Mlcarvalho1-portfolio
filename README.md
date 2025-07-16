# Manoel Carvalho - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as a Computer Engineering student and Full-Stack Developer.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Interactive Components**: Smooth scrolling navigation and interactive elements
- **Professional Sections**:
  - Hero section with personal introduction
  - About section with background information
  - Education and academic achievements
  - Professional timeline and experience
  - Technical skills showcase
  - Featured projects portfolio
  - Professional recommendations
  - Contact information and social links

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Routing**: React Router DOM for navigation
- **State Management**: TanStack Query for data fetching
- **Theme Management**: next-themes for dark/light mode
- **Icons**: Lucide React for consistent iconography
- **Animations**: Tailwind CSS animations and custom transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Mlcarvalho1-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Education.tsx   # Education section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Timeline.tsx    # Professional timeline
│   ├── Recommendations.tsx # Professional recommendations
│   ├── Contact.tsx     # Contact information
│   └── Navigation.tsx  # Navigation component
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets (images, etc.)
```

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:
- `src/components/Hero.tsx` - Update name, title, and personal description
- `src/components/About.tsx` - Modify about section content
- `src/components/Education.tsx` - Update education details
- `src/components/Skills.tsx` - Add or modify your skills
- `src/components/Projects.tsx` - Showcase your projects
- `src/components/Contact.tsx` - Update contact information and social links

### Styling
- Modify `tailwind.config.ts` for custom colors and design tokens
- Update `src/index.css` for global styles
- Customize component styles in individual component files

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with a single click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Build and deploy: `npm run build && npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Code Quality
- ESLint configuration for code linting
- TypeScript for type safety
- Prettier for code formatting (recommended)

### Performance
- Vite for fast development and optimized builds
- Image optimization for web assets
- Lazy loading for better performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to open issues or submit pull requests.

## 📞 Contact

- **LinkedIn**: [Manoel Carvalho](https://www.linkedin.com/in/manoel-carvalho-350507236)
- **GitHub**: [Mlcarvalho1](https://github.com/Mlcarvalho1)
- **Location**: Recife, Brazil
- **Education**: Computer Engineering at UFPE (Expected 2028)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
