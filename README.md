# Hilink - Travel & Camping App

A modern travel and camping exploration application built with Next.js 16, React 19, and Tailwind CSS. This is a beautifully designed UX/UI app that helps users discover and plan camping adventures.

## 🎯 About

Hilink is a comprehensive travel application that provides users with:
- **Real-time Maps**: Offline maps for climbing and hiking adventures
- **Adventure Scheduling**: Plan trips with friends and explore holiday offers
- **Augmented Reality**: AR-powered trail guidance for hiking experiences
- **Location Discovery**: Access to new camping and adventure locations monthly
- **User-Friendly Interface**: Responsive design with modern UI components

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React framework with server-side rendering
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4 with PostCSS
- **UI Components**: Radix UI & Custom Components
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: PNPM

## 📦 Project Structure

```
nextjs-travel-app/
├── app/                           # Next.js app directory
│   ├── layout.tsx                # Root layout with navbar & footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── shared/                   # Shared sections
│   │   ├── HeroSection.tsx
│   │   ├── CampSection.tsx
│   │   ├── GuideSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── GetAppSection.tsx
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       └── nav-link.tsx
├── constant/                      # Constants & configurations
├── lib/                          # Utility functions
├── public/                       # Static assets
└── tailwind.config.ts            # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PNPM (recommended)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-refresh as you make changes to the code.

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Key Features

### 1. Hero Section
Eye-catching landing section to grab user attention

### 2. Camp Section
Showcase of featured camping locations with user testimonials

### 3. Guide Section
Travel tips and guides for users planning adventures

### 4. Features Section
Highlighting key app features:
- Offline Maps
- Adventure Scheduling
- AR Technology
- New Locations

### 5. Get App Section
Call-to-action for downloading the mobile app

### 6. Navigation
Responsive navbar with menu links and user login

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tailwind CSS responsive utilities
- Mobile menu for navigation on small screens
- Adaptive layouts for all screen sizes

## 🚀 Deployment

Deploy this Next.js app easily on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Your app will be live in minutes

For more details, check [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork and submit pull requests.
