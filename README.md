# Andromeda

Welcome to the Andromeda repository! Andromeda is a cross-platform social media application built with React Native that allows users to share images and videos seamlessly. This README provides all the necessary information to get started with the project, including setup instructions, features, and contribution guidelines.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and registration with email/password.
- **Media Sharing**: Post images and videos.
- **Feed**: View posts from users you follow.
- **Profile**: Manage your profile, view your posts.
- **Likes and Comments**: Engage with posts through likes and comments.
- **Notifications**: Get notified about likes, comments, and new followers.
- **Search**: Find users and posts with the search functionality.
- **Cross-Platform**: Available on both iOS and Android devices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version >= 14)
- **npm** or **yarn**
- **React Native CLI** (for running on actual devices)
- **Android Studio** and/or **Xcode** (for Android and iOS development, respectively)
- A **Firebase** project setup (for authentication and media storage)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/7irelo/Andromeda.git
   cd andromeda
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication, Firestore Database, and Storage.
   - Download the `google-services.json` file for Android and `GoogleService-Info.plist` file for iOS, and place them in their respective directories.

4. **Link native dependencies:**
   ```sh
   npx react-native link
   ```

5. **Start the Metro bundler:**
   ```sh
   npx react-native start
   ```

6. **Run the application:**
   - For Android:
     ```sh
     npx react-native run-android
     ```
   - For iOS:
     ```sh
     npx react-native run-ios
     ```

## Usage

Once the app is installed, you can:

- Sign up for a new account or log in with an existing one.
- Share images and videos from your device.
- Explore the feed to see posts from other users.
- Like and comment on posts.
- Follow other users to see their posts in your feed.
- Edit your profile information and manage your posts.

## Folder Structure

Here's a brief overview of the project's folder structure:

```
andromeda/
├── android/              # Android-specific files
├── ios/                  # iOS-specific files
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation configurations
│   ├── screens/          # App screens (Home, Profile, etc.)
│   ├── services/         # API and Firebase services
│   ├── styles/           # Styling files
│   └── utils/            # Utility functions
├── App.js                # Entry point of the app
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: tirelo.eric@gmail.com
- **GitHub Issues**: [Andromeda Issues](https://github.com/7irelo/Andromeda/issues)

Thank you for using Andromeda! We hope you enjoy sharing your moments with the world.
