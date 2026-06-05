# OrangeHRM Automation

A TypeScript-based end-to-end test automation suite for OrangeHRM using Playwright.

## Project Structure

```
orangeHRMAutomation/
├── pages/                          # Page Object Models (POM)
│   ├── LoginPage.ts               # Login page interactions
│   ├── DashboardPage.ts           # Dashboard page interactions
│   └── ProfilePage.ts             # Profile page interactions
├── tests/
│   ├── auth.setup.ts              # Authentication setup fixture
│   ├── accounting-flow.spec.ts    # Business flow tests
│   └── pageFixtures/
│       └── pageFixtures.ts        # Playwright test fixtures
├── .auth/                          # Authentication state (generated)
│   └── user.json                  # Stored session state
├── playwright.config.ts            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and metadata
```

## Design Patterns

### 1. **Page Object Model (POM)**
- Each page is represented by a class (`LoginPage`, `DashboardPage`, `ProfilePage`)
- Encapsulates page selectors and interactions
- Improves maintainability and reduces code duplication

Example:
```typescript
export class LoginPage {
    constructor(private page: Page) {}
    
    async login(user: string, pass: string): Promise<DashboardPage> {
        await this.page.getByPlaceholder('Username').fill(user);
        await this.page.getByRole('button', {name: 'Login'}).click();
        return new DashboardPage(this.page);
    }
}
```

### 2. **Playwright Fixtures**
- Custom fixtures extend Playwright's testing capabilities
- `pageFixtures.ts` provides reusable test dependencies (e.g., `loginPage`)
- Centralized fixture definitions for consistency

### 3. **Authentication Setup**
- `auth.setup.ts` runs once before tests to authenticate
- Session state stored in `.auth/user.json`
- Subsequent tests use cached authentication (faster execution)

### 4. **Multi-Browser Testing**
- Configured for Chromium, Firefox, and WebKit
- Each browser project depends on the setup project
- Parallel execution with reusable storage state

## Setup & Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create a `.env` file or export:
```bash
export USER=<your_username>
export PASS=<your_password>
```

⚠️ **Security Note**: Never commit credentials. Use CI/CD secrets in production.

### 3. Verify Installation
```bash
npx playwright --version
```

## Running Tests Locally

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/accounting-flow.spec.ts
```

### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Run Tests with UI Mode
```bash
npx playwright test --ui
```

### View HTML Test Report
```bash
npx playwright show-report
```

## Configuration

### Base URL
- Default: `https://opensource-demo.orangehrmlive.com`
- Change in `playwright.config.ts` under `use.baseURL`

### Test Directory
- Tests are located in `./tests` directory
- Test files must end with `.spec.ts`

### Retries & Parallel Execution
- **Local**: No retries, parallel execution enabled
- **CI**: 2 retries, sequential execution (1 worker)
- Configure in `playwright.config.ts`

## Key Files Explained

| File | Purpose |
|------|---------|
| `playwright.config.ts` | Playwright settings, browsers, reporters |
| `pages/*.ts` | Page Object Models for UI interaction |
| `tests/auth.setup.ts` | Authentication fixture (runs first) |
| `tests/*.spec.ts` | Actual test cases |
| `tsconfig.json` | TypeScript compiler options |

## Common Commands

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with UI
npx playwright test --ui

# Run specific test
npx playwright test -g "Login"

# Debug mode
npx playwright test --debug

# View report
npx playwright show-report

# Clear auth cache
rm -rf .auth/user.json
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `USER/PASS not set` | Export environment variables before running tests |
| `Auth fails` | Delete `.auth/user.json` and re-run to re-authenticate |
| `Tests timeout` | Increase timeout in `playwright.config.ts` or test file |
| `Browser not found` | Run `npx playwright install` to install browser binaries |

## CI/CD Integration

For GitHub Actions or other CI systems:
1. Set `USER` and `PASS` secrets
2. Run: `npm install && npx playwright test`
3. Upload reports: `npx playwright show-report`

---

**Target Application**: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)
