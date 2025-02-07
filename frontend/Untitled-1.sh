#!/bin/bash

# Navigate to the root of your project (cloudmeet folder)
cd /Users/somit17/Documents/Projects/NextJs/cloudmeet

# Step 1: Create frontend and backend folders
mkdir -p frontend
mkdir -p backend

# Step 2: Move all existing files (except .git folder) to the frontend folder
mv $(ls -A | grep -v ".git") frontend/

# Step 3: Initialize the backend folder with a .NET Core Web API project
cd backend

# Check if .NET SDK is installed
if ! command -v dotnet &> /dev/null; then
    echo "Error: .NET SDK is not installed. Please install it from https://dotnet.microsoft.com/download"
    exit 1
fi

# Create a new .NET Core Web API project directly in the backend folder
dotnet new webapi -n MyWebApi --output .

# Add Entity Framework Core packages for MSSQL
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

# Restore dependencies
dotnet restore

# Step 4: Return to the root directory
cd ..

# Step 5: Update .gitignore to include backend-specific files
cat <<EOL >> .gitignore

# Ignore .NET Core build artifacts
/bin/
/obj/
*.csproj.user
*.suo
*.user
*.vs
EOL

# Step 6: Commit the changes to Git
git add .
git commit -m "Restructure project: Move Next.js to frontend folder and create backend folder with .NET Core Web API"

echo "Project restructured successfully!"