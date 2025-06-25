@echo off
echo ===================================
echo Paste Frontend Development Runner
echo ===================================
echo.
echo This script will start the frontend in development mode.
echo The application will be available at http://localhost:5173/
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Error: Node.js is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Error: npm is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/ (includes npm)
    echo.
    pause
    exit /b 1
)

echo Installing dependencies (if needed)...
npm install

if %ERRORLEVEL% neq 0 (
    echo.
    echo Error: Failed to install dependencies.
    echo.
    pause
    exit /b 1
)

echo.
echo Starting development server...
echo.
npm run dev

if %ERRORLEVEL% neq 0 (
    echo.
    echo Error: Failed to start the development server.
    echo.
    pause
    exit /b 1
)

pause