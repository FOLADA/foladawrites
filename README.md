# FoladaWrites

A modern, responsive writing platform built with React, TypeScript, and Tailwind CSS. Features an elegant design with comprehensive theme support including light, dark, and system-based themes.

## ✨ Features

- 🎨 **Theme Support**: Light, dark, and system theme modes with seamless switching
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Fast Development**: Built with Vite for lightning-fast hot module replacement
- 🎭 **Modern UI**: Styled with Tailwind CSS and shadcn/ui components
- 🔧 **TypeScript**: Full type safety throughout the application
- 🎯 **Accessible**: Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd foladawrites
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application running.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start the development server with hot reloading
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

### Project Structure

```
foladawrites/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.tsx   # Navigation component
│   │   └── ThemeToggle.tsx # Theme switching component
│   ├── contexts/        # React context providers
│   │   └── ThemeContext.tsx # Theme management
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and CSS variables
├── package.json         # Project dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Theme System

The application includes a comprehensive theme system with three modes:

- **Light Mode**: Clean, bright interface for daytime use
- **Dark Mode**: Easy on the eyes for low-light environments
- **System Mode**: Automatically matches your operating system's theme preference

The theme toggle is accessible from the navigation bar and remembers your preference across sessions.

## 🏗️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

## 📦 Key Dependencies

### Core
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19

### UI & Styling
- Tailwind CSS 3.4.17
- @shadcn/ui 0.0.4
- Radix UI components
- Lucide React icons

### Development Tools
- ESLint for code linting
- PostCSS for CSS processing
- Various TypeScript type definitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web development best practices
- Inspired by clean, minimal design principles
- Accessibility-first approach to UI development