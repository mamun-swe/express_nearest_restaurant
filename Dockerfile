
# Node version
FROM node:16

# Make work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

# NPM install & build
RUN npm install
RUN npm run build

# POR define
EXPOSE 5000

# Set ENV variables
ENV PORT=5000
ENV DB_URI=mongodb://localhost:27017/nearest-restaurant

# Open CMD & execute command
CMD [ "npm", "start"]