# Use Node.js 14 as the base image
FROM node:14

# Set the working directory to /app
WORKDIR ./

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# EXPOSE PORT 3333
EXPOSE 3333

# Set the container's command to run the compiled JavaScript code
CMD ["node", "src/main.js"]