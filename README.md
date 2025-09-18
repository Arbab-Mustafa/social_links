# Simple Web App

A modern, responsive web application built with Next.js 14, React 18, and Tailwind CSS. This project demonstrates modern web development practices with TypeScript support, beautiful UI components, and optimal performance.

## Features

- ⚡ **Next.js 14** - Latest version with App Router
- ⚛️ **React 18** - Modern React with hooks and concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Automatic dark mode support
- 📝 **TypeScript** - Type-safe development
- 🚀 **Performance Optimized** - Server-side rendering and static generation

## Prerequisites

- Node.js 22 LTS or higher
- npm or yarn package manager

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── Button.tsx        # Button component
│   ├── Card.tsx          # Card component
│   └── Header.tsx        # Header component
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Adding New Components

Create new components in the `components/` directory:

```typescript
// components/MyComponent.tsx
export function MyComponent() {
  return (
    <div className="p-4">
      <h1>My Component</h1>
    </div>
  );
}
```

### Styling

This project uses Tailwind CSS for styling. You can:

- Modify `tailwind.config.js` to customize the design system
- Add custom styles in `app/globals.css`
- Use Tailwind utility classes in your components

### Dark Mode

Dark mode is automatically supported through Tailwind's `dark:` prefix and CSS variables defined in `globals.css`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is open source and available under the [MIT License](LICENSE).
