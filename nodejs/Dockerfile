# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the PORT environment variable
ENV PORT=3000

# Expose the specified port
EXPOSE $PORT

# Start the application
CMD ["npm", "start"]
