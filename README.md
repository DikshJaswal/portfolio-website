# Dikshit Jaswal — Portfolio

Personal portfolio website for Dikshit Jaswal, a B.Tech Computer Science student and full-stack web developer.

The site showcases selected projects, technical skills, education, contact information, and a downloadable resume.

## Highlights

- Responsive design for desktop, tablet, and mobile screens
- Modern dark-glass UI with gradients, grid textures, and smooth interactions
- Scroll-aware navigation with mobile menu support
- Project cards with live demos and GitHub repositories
- Skills grouped by frontend, backend, data, and workflow
- EmailJS-powered contact form
- Downloadable resume PDF
- Smooth scrolling and reduced-motion support

## Tech Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis smooth scrolling
- Lucide React icons
- EmailJS REST API

## Featured Projects

| Project | Description | Links |
| --- | --- | --- |
| API Sentinel | API monitoring and security dashboard | [Live Demo](https://api-sentinel-psi.vercel.app) |
| FinPilot | Full-stack personal finance tracker | [Live Demo](https://fin-pilot-zeta-dun.vercel.app/) · [GitHub](https://github.com/DikshJaswal/FinPilot) |
| Resolve | Role-based customer support workspace | [Live Demo](https://resolve-pink-eight.vercel.app/) · [GitHub](https://github.com/DikshJaswal/RESOLVE) |
| CodeFlow Debugger | JavaScript debugging and code analysis tool | [Live Demo](https://codeflow-javascript-debugger.vercel.app) |

## Run Locally

Requirements: Node.js 18 or newer and npm.

```bash
git clone https://github.com/DikshJaswal/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## EmailJS Configuration

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for the complete EmailJS setup guide.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
npx tsc --noEmit # Check TypeScript without emitting files
```

## Project Structure

```text
src/
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── globals.css            # Global styles and responsive design
│   └── api/                   # Placeholder API route
├── components/
│   ├── sections/              # Hero, About, Projects, Skills, Contact
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── providers/             # Smooth scrolling provider
public/
├── resume.pdf
├── FinPilot.png
└── Resolve.png
```

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com/):

1. Import the repository into Vercel.
2. Add the three EmailJS environment variables.
3. Deploy the project.

## License

This portfolio is maintained by Dikshit Jaswal.
