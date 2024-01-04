# 🚀 Gamdom QA Automation Project Setup

## 🌐 Getting Started

### 🔨 Setup

To clone this repository and run the tests:

1. Clone the repository: `git clone [https://github.com/darioCuc/Gamdom]` or extract it from the provided `.zip` file 📋
2. Navigate using terminal to the repository directory: `cd ~/Users/Gamdom` 📂
3. Install Playwright locally: `pnpm install playwright` || `npm i -D playwright` 💻 (latest)
4. Run the tests: `npx playwright test` || `npx playwright test --headed` || `npx playwright test --ui` 🧪


## 📝 Notes

### Playwright and TypeScript Installation

- Initialized the `Playwright` framework for end-to-end testing. 🎭
- Installed `TypeScript` to enhance code quality and maintainability. 📚 

### ESLint Integration

- Integrated ESLint for consistent coding standards. 🧹 
- Configured ESLint to work seamlessly with TypeScript. ⚙️

### Project Structure Updates

- Added a `pages` folder following the Page Object Model principle, containing multiple `.ts` files for different pages on the Gamdom site. 📁
- 📚 Created an `Additional-testing-Files` folder, which includes:
  - `TASK1.md`: Documents the 5 key areas critical for business functionality identified during exploratory testing. 📃
  - `Bug Report - Gamdom.pdf`: Details a bug found on the Gamdom production page during exploratory testing. 🐞
- All the tests are stored in `tests` directory and they are divided by the area/page they cover.
- A file named `testHelpers.ts` has been added to the project and it contains functions that are reusable throughout the project. 🧰
- POM (`Page Object Model`) has been used for project structure architecture

### Configuration

- Added a `tsconfig.json` file to specify the root files and compiler options for the TypeScript project, enhancing project structure and compilation settings. 🔧

### Decisions made in development process

- Added a skip function in the 1st login test due to CAPTCHA limitations. 🚫
- Increased the viewport size in `playwright.config.ts` to adapt to responsive design elements in the topbar. 🔍

### Test Reports 📊

- A new folder `Gamdom-test-reports` has been added to store test run reports, providing detailed insights on each test execution.

### Observations 🕵️‍♂️

- Gamdom website is not test automation friendly due to the fact that it has a low number of `data-testIds` or any type of IDs that speed up the test development process and reliability.
- Parts of Gamdom app tends to be unstable and unresponsive which poses some problems for automated tests. So there's room for app improvements and optimizations (eg. Chat, topbar etc.)
