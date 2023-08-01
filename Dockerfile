# Use the official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application files
COPY . .

# Expose the port your Nest.js app is running on
EXPOSE 3000

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]
