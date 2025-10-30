# Advanced Nautical Ventures FZE website

This Vite + React + Tailwind CSS single-page application presents a marketing site for Advanced Nautical Ventures FZE (ANVA). It highlights the company’s marine services, regional operations, leadership team, and contact pathways referenced from public LinkedIn updates.

## Tech stack

- [Vite](https://vite.dev/) for the React development and build tooling
- [React Router](https://reactrouter.com/) for page routing
- [Tailwind CSS](https://tailwindcss.com/) with custom brand palette inspired by the ANVA logo

## Available scripts

From the `web` directory you can run:

```bash
npm install
npm run dev      # start the development server
npm run build    # generate a production build in dist/
npm run preview  # preview the built site locally
npm run lint     # run ESLint checks
```

## Project structure

- `src/pages/` contains page content for Home, About, Vision & Mission, Projects, Team, and Contact
- `src/components/Footer.jsx` defines the global footer
- `tailwind.config.js` configures the ANVA brand colors
- `public/anva-logo.jpg` stores the provided logo for the favicon and header branding

## Deployment

Run `npm run build` and deploy the generated `dist/` directory on any static hosting service (e.g., Netlify, Vercel, GitHub Pages).
