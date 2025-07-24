# Creator-Detail-Expo

A React Native app built with Expo that displays a list of creators with their details, supporting both light and dark themes.

## Features

- List of creators with images, bios, and social links (Instagram, YouTube)
- Light/Dark theme toggle (auto-detects system theme, can be toggled manually)
- Responsive and modern UI
- Built with Expo for easy development and deployment

## Prerequisites

- [Node.js](https://nodejs.org/) (recommended v18+)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install globally with `npm install -g expo-cli`)
- (Optional) Android Studio or Xcode for device emulators, or Expo Go app on your mobile device

## Setup

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd yourname-creator-detail-rn
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **(Optional) Install Expo CLI globally if you haven't:**
   ```sh
   npm install -g expo-cli
   ```

## Running the App

### Start the development server

```sh
npm start
```
or
```sh
expo start
```

This will open the Expo Dev Tools in your browser.

### Run on your device

- **Android:** Press `a` in the terminal, or scan the QR code with the Expo Go app.
- **iOS:** Press `i` in the terminal, or scan the QR code with the Expo Go app.
- **Web:** Press `w` in the terminal, or open the web link from Expo Dev Tools.

## Project Structure

- `App.js` - Main app entry, sets up theme provider and navigation.
- `components/` - Reusable UI components (e.g., `creatorCard.js`, `NavBar.js`).
- `screens/` - App screens (e.g., `creatorScreen.js`).
- `data/creator.json` - Static data for creators.
- `theme.js` & `ThemeContext.js` - Theme definitions and context provider.

## Customization

- **Add/Edit Creators:** Modify `data/creator.json` to update the list of creators.
- **Theming:** Update `theme.js` for custom colors and styles.
- **Assets:** Place your icons and images in the `assets/` directory.

## Build & Deployment

For advanced builds (APK, IPA, etc.), see [Expo EAS Build](https://docs.expo.dev/build/introduction/):

```sh
npx expo install expo-updates
npx eas build
```

## Troubleshooting

- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
- For Expo-specific issues, see the [Expo documentation](https://docs.expo.dev/).

## License

0BSD

---

Feel free to further customize this README for your project or team! 
