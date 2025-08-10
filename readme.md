# Addaptor Frontend

A mobile app built with **React Native + Expo + Typescript**

## Tech Stack

- Typescript
- React Native
- Expo
- NPM

---

## Getting Started

1. clone the repo

```
git clone https://github.com/ftr9/adapptor-frontend.git
```

2. go inside the cloned repo directory

```
cd adapptor-frontend
```

3. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npx expo run:ios # if ios simulator
npx expo run:android # if android simulator
```

3. open the app

```bash
press i on the terminal # to open app on ios simulator
press a on the terminal  # to open app on android simulator
```

### Running Tests

1. Run all tests:

```bash
npm run test
```

### Decision Regarding using EXPO

Expo offers a powerful routing system called expo-router, which is file-based and works similarly to Next.js. This makes it highly scalable for larger applications. Additionally, Expo’s build ecosystem is very robust, featuring EAS (Expo Application Services) that simplify building and running apps on both iOS and Android platforms. Setting up over-the-air (OTA) updates is straightforward, which helps in delivering updates seamlessly without app store resubmissions.

### Architecture

Since the application is currently small, a simple architecture is adopted. All reusable components are placed inside a centralized components directory. Although the routing system resembles Next.js, Expo does not yet support colocating components directly alongside their corresponding pages. Therefore, components that are used globally or across multiple pages are stored in the main components folder, while components specific to a single page are kept within a dedicated subfolder inside that page’s directory under components.

### Ideas for extension and improvements

At this stage, the app serves as a solid boilerplate to start building any React Native application. It already includes backend integration, organized components, and testing setup.

Some potential improvements include:

**Adding Visual Test Coverage**: While there are tests in place, currently there’s no visual feedback for test coverage. Introducing code coverage reporting would give clear insights into which parts of the app are tested and which aren’t.

**Creating Reusable API Functions**: The app currently relies on a raw Axios instance for backend communication. Refactoring this into reusable, standardized API helper functions will improve maintainability and reduce duplicated code.
