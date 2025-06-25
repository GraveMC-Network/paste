# Frontend Development Setup

This document provides instructions for setting up and running the frontend of the Paste application in development mode.

## Prerequisites

Before you can run the frontend, you need to have the following installed:

1. **Node.js and npm**: Download and install from [https://nodejs.org/](https://nodejs.org/)
   - Make sure both `node` and `npm` commands are available in your PATH

## Running the Frontend

### Option 1: Using the run-frontend.bat Script (Recommended)

1. Double-click on the `run-frontend.bat` file in the project root directory
2. The script will:
   - Check if Node.js and npm are installed
   - Install dependencies (if needed)
   - Start the development server
3. Once started, the frontend will be available at [http://localhost:5173/](http://localhost:5173/)

### Option 2: Using Command Line

If you prefer to use the command line or if the batch script doesn't work, you can run these commands manually:

1. Open Command Prompt or PowerShell
2. Navigate to the project directory:
   ```
   cd path\to\paste
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Once started, the frontend will be available at [http://localhost:5173/](http://localhost:5173/)

## Troubleshooting

If you encounter issues running the frontend:

1. **Node.js/npm not found**: Make sure Node.js is installed and added to your PATH
2. **Permission issues**: Try running Command Prompt or PowerShell as Administrator
3. **Dependency installation fails**: 
   - Check your internet connection
   - Try deleting the `node_modules` folder and running `npm install` again
4. **Port already in use**: Make sure no other application is using port 5173

## Editing the Frontend

Once the development server is running:

1. You can edit any files in the `src` directory
2. The changes will be automatically reflected in the browser (hot reloading)
3. The main application file is `src/App.tsx`
4. The entry point is `src/main.tsx`

## Notes

- The frontend in development mode uses the public bytebin service by default
- If you want to run both frontend and backend together, you'll need Docker and can use the original `run-paste.bat` script with option 1