
# Hack-2-Skill

A visually stunning, interactive web application for the Hack-2-Skill event, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Hero Section**: Animated, interactive hero with mouse-based parallax effects, floating orbs, and an astronaut animation.
- **Modern UI**: Responsive design using Tailwind CSS, with custom components for navigation, timeline, prizes, sponsors, and image gallery.
- **Component-Based Architecture**: All UI elements are modular React components for maintainability and scalability.
- **Performance**: Fast build and hot-reload enabled by Vite.
- **Accessibility**: Semantic HTML and accessible color contrasts.

## Project Structure

```
src/
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
└── components/
    ├── HeroSection.tsx
    ├── ImageGallery.tsx
    ├── Navigation.tsx
    ├── ParticleBackground.tsx
    ├── PrizesSection.tsx
    ├── SponsorsSection.tsx
    └── TimelineSlider.tsx
index.html
package.json
tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts
tailwind.config.js
postcss.config.js
eslint.config.js
```

## Getting Started


### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn


### Installation

1. Clone the repository:

   ```powershell
   git clone https://github.com/chiragSahani/Hack-2-skill.git
   cd Hack-2-skill
   ```

2. Install dependencies:

   ```powershell
   npm install
   # or
   yarn install
   ```


### Development

Start the development server:

```powershell
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.


### Build

To build for production:

```powershell
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.


### Linting

To check code quality:

```powershell
npm run lint
# or
yarn lint
```


## Customization

- **Tailwind CSS**: Modify `tailwind.config.js` for custom themes.
- **Components**: Add or edit components in `src/components/`.
- **Assets**: Update images and icons as needed.


## Contributing

Pull requests are welcome! Please follow best practices and ensure all code passes linting and builds successfully.


## Repository

- GitHub: [Hack-2-Skill](https://github.com/chiragSahani/Hack-2-skill)


## License

MIT
