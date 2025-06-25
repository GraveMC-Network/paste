@echo off
echo ===================================
echo Paste Application Runner
echo ===================================
echo.
echo Choose an option:
echo 1. Run with Docker (recommended, includes backend)
echo 2. Run frontend only (development mode)
echo.
set /p option="Enter option (1 or 2): "

if "%option%"=="1" (
    echo.
    echo Starting Paste with Docker...
    echo This will run both frontend and backend services.
    echo The application will be available at http://localhost:8080/
    echo.
    docker compose up -d
    echo.
    echo Docker containers started! Access the application at:
    echo http://localhost:8080/
) else if "%option%"=="2" (
    echo.
    echo Starting Paste frontend in development mode...
    echo This will run only the frontend, using the public bytebin service.
    echo The application will be available at http://localhost:5173/
    echo.
    echo Installing dependencies (if needed)...
    call npm install
    echo.
    echo Starting development server...
    call npm run dev
) else (
    echo Invalid option selected.
)