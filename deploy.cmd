@echo off
setlocal
cd /d "%~dp0"

echo ==========================================
echo  Videsh Karmakar - Website Deployment
echo ==========================================
echo.

echo [1/4] Type check...
call npm run lint
if errorlevel 1 goto fail

echo.
echo [2/4] Build...
call npm run build
if errorlevel 1 goto fail

echo.
echo [3/4] Commit and push to GitHub...
call git add -A
call git diff --cached --quiet
if errorlevel 1 (
  call git commit -m "Update website content"
  if errorlevel 1 goto fail
) else (
  echo Nothing new to commit.
)
call git push origin main
if errorlevel 1 goto fail

echo.
echo [4/4] Deploy to Vercel production...
call vercel --prod --yes
if errorlevel 1 goto fail

echo.
echo ==========================================
echo  Done: https://videshkarmakarlive.vercel.app
echo ==========================================
pause
exit /b 0

:fail
echo.
echo ==========================================
echo  Deployment failed - check the output above.
echo ==========================================
pause
exit /b 1
