## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/ecomerce.git
```

2. Install dependencies:

```bash
cd ecomerce
npm install
```

## Running Tests

```bash
# Run all tests
npm run test:cy

# Run tests in debug mode (with browser UI)
npm run test:debug

# Run specific test scenarios
npm run test:cy -- --env tags=@your-tag
```

## Available Scripts

- `npm run test:cy` - Run tests in headless mode
- `npm run test:debug` - Run tests in headed mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run create:report` - Generate test report

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── features/           # Feature files
│   ├── support/
│   │   ├── stepDefinitions/    # Step definitions
│   │   ├── commands.ts         # Custom commands
│   │   └── e2e.ts             # Support file
│   └── pages/                  # Page objects
├── .vscode/                    # VS Code settings
├── reports/                    # Test reports
├── cypress.config.ts           # Cypress configuration
├── cypress.env.json           # Environment variables
├── package.json
└── tsconfig.json
```

## VS Code Setup

1. Required Extensions:

   - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
   - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
   - [Cypress](https://marketplace.visualstudio.com/items?itemName=cypress-io.cypress)

2. Recommended Extensions:
   - ESLint
   - Prettier

Features enabled:
- Gherkin syntax highlighting
- Step definition navigation (Ctrl+click)
- Cucumber icons for .feature files
- Auto-formatting on save

## Dependencies

Key dependencies and their versions:

- cypress: 12.7.0
- @badeball/cypress-cucumber-preprocessor
- @bahmutov/cypress-esbuild-preprocessor
- typescript
- eslint
- prettier
