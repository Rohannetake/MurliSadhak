@echo off
title MurliSadhak Studio Server (Port 8080)
echo.
echo ============================================================
echo   MurliSadhak - Personal Bansuri Riyaaz Studio
echo ============================================================
echo   Starting server on http://localhost:8080 ...
echo   Opening MurliSadhak in your default browser...
echo.

start http://localhost:8080

where node >nul 2>nul
if %errorlevel% equ 0 (
    node server.js
) else (
    echo Node.js not detected in PATH. Falling back to Python...
    python -m http.server 8080
)

pause
