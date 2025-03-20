FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Command to run the application
CMD ["node", "app.js"]