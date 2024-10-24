# React GitHub Uploader

This project is a **React-based web application** that showcases the use of advanced React concepts like state management, API integration (GitHub API), and file uploading. Styled using **Material UI**, the application provides a clean and modern interface. This project is perfect for developers looking to learn how to integrate external APIs, build responsive layouts, and manage state efficiently in React applications.

## Features

- **File Upload**: Implements drag-and-drop file upload functionality using `react-dropzone`.
- **GitHub Repositories Display**: Connects to the GitHub API to fetch and display repositories from a specified GitHub user.
- **Material UI**: Styled with Material UI components for a modern and responsive interface.
- **State Management**: React’s `useState` and `useEffect` hooks are used for managing state and data fetching.
- **Responsive Layout**: Uses Material UI's grid system to ensure responsive design across different screen sizes.

## Demo

![Demo Screenshot](./assets/demo.png)

## Installation and Setup

### Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

To get started with the project, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/react-github-uploader.git
cd react-github-uploader
```

### Install Dependencies

Once you’re inside the project directory, install the required dependencies using npm or yarn:

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### Set Up GitHub API Integration

This project uses the GitHub API to fetch repositories. To make it work, follow these steps:

1. Open the `src/components/GitHubRepo.jsx` file.
2. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username in the API call:

   ```javascript
   const response = await axios.get('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
   ```

   If you want to use a different API endpoint or fetch more data (e.g., private repositories, user authentication), you can modify this part of the code accordingly.

### Running the Application

Once you have completed the setup, you can start the application in development mode by running:

```bash
npm run dev
```

or for yarn users:

```bash
yarn dev
```

This will start the app and open it in your default web browser at `http://localhost:5173`.

### Building for Production

To build the project for production, run the following command:

```bash
npm run build
```

or for yarn users:

```bash
yarn build
```

The production-ready files will be generated in the `dist/` folder, which you can deploy on any static hosting service like Netlify, Vercel, or GitHub Pages.

## Usage Instructions

### File Upload

- You can drag and drop files into the designated file upload area, or click the area to select files from your computer.
- The files you upload will be displayed as a preview below the upload box.

### Viewing GitHub Repositories

- Once you start the app, it fetches your public repositories from GitHub (based on the username provided).
- Click on the repository name to view it on GitHub in a new tab.

## Folder Structure

```
/src
 ├── /components         # Contains the reusable components
 │   ├── FileUpload.jsx   # File Upload Component
 │   └── GitHubRepo.jsx   # GitHub Repositories Fetcher Component
 ├── App.jsx              # Main application component
 ├── index.jsx            # Entry point for React
 └── index.css            # Global styles
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A popular UI framework for React, providing customizable and responsive components.
- **Axios**: A promise-based HTTP client for making requests to the GitHub API.
- **react-dropzone**: A library for handling drag-and-drop file uploads.
- **Vite**: A fast build tool and development server for modern web applications.

## Future Enhancements

This project could be enhanced with additional features like:
- **Authentication with GitHub**: Allow users to authenticate and view private repositories or upload files directly to GitHub.
- **Pagination for Repositories**: Support pagination for users with many repositories.
- **File Upload Enhancements**: Support file type validation and progress bars for uploads.
- **Error Handling**: Improved error handling for API requests and file uploads.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions, feedback, or suggestions, feel free to reach out:

- **GitHub**: [SamsonNg00](https://github.com/SamsonNg00)
- **Email**: samsonnguyen00@gmail.com
