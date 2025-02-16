# Use a Node.js image for building the app
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install --legacy-peer-deps

# Copy the source code and build the app
COPY . .
RUN npm run build

# Use an Nginx image to serve the built app
FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
