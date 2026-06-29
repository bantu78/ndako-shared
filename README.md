"# ndako-shared" 
npm install ndako-shared@github:bantu78/ndako-shared  
npm update ndako-shared

Your package.json states that the entry point of your app is inside the dist folder ("main": "dist/index.js"). If you do not build your TypeScript files into JavaScript, that folder will be missing. Run these commands:bash

# Install dependencies locally if you haven't already
npm install
# Compile your TypeScript files into the 'dist' folder
npm run build

git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/bantu78/ndako.git
git push -u origin main