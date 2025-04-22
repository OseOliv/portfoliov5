FROM node:20-alpine

# Install bash
RUN apk add --no-cache bash

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Expose port for the development server
EXPOSE 4200

# Command to run the development server
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
