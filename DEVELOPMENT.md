# Development Guide

## Getting Started

This is a [Next.js](https://nextjs.org/) portfolio website built with TypeScript and Tailwind CSS.

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

#### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Bio and skills
- `src/components/Contact.tsx` - Email and LinkedIn
- `src/components/Projects.tsx` - Your actual projects

#### Resume

Replace `public/resume.pdf` with your actual resume file.

#### Professional Photo

Add your professional photo to the `public/` directory and update the image reference in `src/components/About.tsx`.

### Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

### Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment
