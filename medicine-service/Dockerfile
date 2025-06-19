# Use an official Node.js runtime as the base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package files first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
