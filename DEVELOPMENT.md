# FAFi Frontend - Development Guide

## Project Setup

This is the FAFi (Fun Among Friends) frontend application built with Angular, TypeScript, and TailwindCSS.

### Prerequisites

- Node.js (v18 or higher)
- npm (v11 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/FAFI` directory.

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

Fix linting issues automatically:
```bash
npm run lint:fix
```

### Code Formatting

Format code with Prettier:
```bash
npm run format
```

### Testing

Run unit tests:
```bash
npm test
```

### Project Structure

```
src/
├── app/
│   ├── app.ts               # Root component
│   ├── app.routes.ts        # Route definitions
│   ├── app.config.ts        # App configuration
│   ├── app.html             # Root template
│   ├── app.css              # Root styles
│   ├── Pages/               # Page components
│   │   └── mainpage/        # Home page
│   ├── Components/          # Reusable components
│   │   └── navigation-bar/  # Navigation component
│   └── Shared/              # Shared resources
│       ├── services/        # Angular services
│       ├── models/          # Data models
│       ├── utilities/       # Utility functions
│       ├── directives/      # Custom directives
│       ├── pipes/           # Custom pipes
│       └── guards/          # Route guards
├── environments/            # Environment configuration
├── main.ts                  # Application entry point
├── styles.css               # Global styles
└── index.html               # HTML template

```

### Technology Stack

- **Framework**: Angular 21
- **Language**: TypeScript 5.9
- **Styling**: TailwindCSS 4.1
- **Testing**: Vitest 4.0
- **Linting**: ESLint 10.5
- **Formatting**: Prettier 3.8
- **State Management**: RxJS 7.8

### Environment Configuration

Environment-specific configurations are located in `src/environments/`:

- `environment.ts` - Development configuration
- `environment.prod.ts` - Production configuration

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode |
| `npm test` | Run unit tests |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |

### Key Services

#### UserService
Manages user state and authentication related operations.

#### GameService
Manages game rooms and game state.

### Best Practices

1. **Component Naming**: Use PascalCase for component classes and kebab-case for selectors
2. **File Structure**: Keep related files together in feature folders
3. **Services**: Declare services as `providedIn: 'root'` for tree-shaking
4. **Styling**: Use TailwindCSS utility classes; limit component-specific styles
5. **Error Handling**: Always handle RxJS subscriptions properly
6. **Testing**: Write unit tests for services and critical components

### Routing

The application uses Angular's standalone routing API. Routes are defined in `app.routes.ts`.

Currently configured routes:
- `/` - Home page (default)
- `/home` - Redirects to home

### Styling

This project uses TailwindCSS for styling. Tailwind is configured to:
- Scan all TypeScript and HTML files for class usage
- Generate optimized CSS
- Support responsive design with breakpoints

Global styles are defined in `src/styles.css`.

### Contributing

Follow these conventions when contributing:
- Use ESLint and Prettier before committing
- Write meaningful commit messages
- Keep components focused and reusable
- Document public APIs with comments
- Add tests for new functionality

### Troubleshooting

**Build fails with font import error:**
External font imports are not allowed in the build environment. Use system fonts or local fonts instead.

**ESLint parsing errors:**
Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

**Port 4200 already in use:**
Use: `ng serve --port 4201`

### Resources

- [Angular Documentation](https://angular.io)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

