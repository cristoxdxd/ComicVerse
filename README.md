# ComicVerse

A modern React application for exploring comic collections, built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Comic Discovery**: Browse and search through comic collections
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility First**: Built with WCAG guidelines in mind
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **TypeScript**: Full type safety throughout the application
- **API Integration**: Connects to Marvel Comics API
- **Loading States**: Skeleton loaders and proper error handling
- **Comic Details**: Dedicated pages for individual comics

## 📋 Prerequisites

- **Node.js 22.x or higher** (recommended)
- npm or yarn package manager

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ComicVerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Marvel API credentials:
   ```env
   VITE_COMICS_API_BASE_PATH=https://gateway.marvel.com:443/v1/public/comics?apikey=YOUR_API_KEY_HERE
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Marvel Comics API** - Data source

## 🌟 Recent Improvements

- ✅ Upgraded to Node.js 22.x compatibility
- ✅ Fixed all TypeScript/ESLint issues
- ✅ Enhanced API error handling and loading states
- ✅ Implemented functional "Load More" pagination
- ✅ Added comic detail pages with routing
- ✅ Improved accessibility with ARIA labels and semantic HTML
- ✅ Enhanced visual design with better contrast and animations
- ✅ Added mobile-responsive navigation
- ✅ Implemented skeleton loading states
- ✅ Added comprehensive search functionality

## 🎯 Future Enhancements

- User authentication and favorites
- Advanced filtering options
- Reading list management
- Social features (reviews, ratings)
- Offline reading capabilities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Marvel Comics for providing the API
- The React and Vite communities for excellent tooling
