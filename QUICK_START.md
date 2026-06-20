# FAFi Frontend - Quick Start

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:4200/`

### 3. Make Changes
- Edit files in `src/`
- Changes hot-reload automatically
- Check console for errors

### 4. Check Code Quality
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
npm run format      # Format code
```

### 5. Build for Production
```bash
npm run build
```

## 📁 Key Folders

| Folder | Purpose |
|--------|---------|
| `src/app/Pages/` | Full page components (routes) |
| `src/app/Components/` | Reusable UI components |
| `src/app/Shared/services/` | Application services |
| `src/app/Shared/models/` | TypeScript interfaces |
| `src/environments/` | Environment configs |

## 🛠 Creating a New Page

1. Create folder: `src/app/Pages/your-page/`
2. Create files:
   - `your-page.ts` (component)
   - `your-page.html` (template)
   - `your-page.css` (styles)
   - `your-page.spec.ts` (tests)

3. Add to routing in `src/app/app.routes.ts`:
```typescript
{
  path: 'your-page',
  component: YourPage,
  data: { title: 'Your Page' }
}
```

## 🧩 Creating a New Component

1. Create folder: `src/app/Components/your-component/`
2. Create files as above (minus routing)
3. Import in parent component

## 📦 Using Services

Example - accessing user service in a component:

```typescript
import { UserService } from '../../Shared/services';

export class MyComponent {
  constructor(private userService: UserService) {}
  
  user$ = this.userService.currentUser$;
}
```

## 🎨 Styling with Tailwind

Use Tailwind classes directly in templates:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

No CSS file needed for basic styling!

## ✅ Tests

Run tests with:
```bash
npm test
```

Test files end with `.spec.ts`

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 4200 in use | `ng serve --port 4201` |
| Node modules broken | `rm -rf node_modules && npm install` |
| Styles not updating | Clear browser cache (Ctrl+Shift+Del) |
| Linting errors | `npm run lint:fix` |

## 📚 More Help

See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed documentation.

## 🔗 Useful Links

- [Angular Docs](https://angular.io)
- [TailwindCSS Docs](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org)
