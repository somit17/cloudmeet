#!/bin/bash

# Step 1: Create frontend and backend folders
echo "Creating frontend and backend folders..."
mkdir -p frontend
mkdir -p backend

# Step 2: Move the Next.js project into the frontend folder
echo "Moving Next.js project into the 'frontend' folder..."
mv -v cloudmeet/* frontend/ # Replace 'nextjs_project' with the actual folder name of your Next.js project

# Step 3: Move the .NET Core Web API project into the backend folder
echo "Moving .NET Core Web API project into the 'backend' folder..."
mv -v MyWebApi/* backend/ # Replace 'MyWebApi' with the actual folder name of your .NET Core project

# Step 4: Update .gitignore to ignore unnecessary files
echo "Updating .gitignore..."
cat <<EOL > .gitignore
# Ignore node_modules in the frontend folder
/frontend/node_modules/
/frontend/.next/
/frontend/out/
/frontend/.env.local

# Ignore .NET Core build artifacts in the backend folder
/backend/bin/
/backend/obj/
/backend/*.csproj.user
/backend/*.suo
/backend/.vs/

# Ignore IDE-specific files
/.idea/
/.vscode/
*.log
*.lock
EOL

# Step 5: Initialize Git (if not already initialized)
if [ ! -d ".git" ]; then
  echo "Initializing Git repository..."
  git init
fi

# Step 6: Add all files to Git and commit
echo "Adding files to Git and committing..."
git add .
git commit -m "Organize project into frontend and backend folders"

# Step 7: Push to remote repository (if remote is set up)
if git remote | grep -q origin; then
  echo "Pushing changes to remote repository..."
  git push origin main
else
  echo "No remote repository configured. Run 'git remote add origin <repository-url>' to set one up."
fi

echo "Setup complete!"