
@echo off
echo Обновление сайта "Пятница на Пике"...
cd /d %~dp0

:: Проверка, есть ли git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git не найден. Установи Git с https://git-scm.com/
    pause
    exit /b
)

:: Добавление, коммит и пуш
git add index.html
git commit -m "Обновление сайта от Пятницы"
git push origin main

echo Готово! Проверь сайт через несколько секунд.
pause
