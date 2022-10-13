FROM node:18-alpine

# Create app directory
WORKDIR /code

# Add './node_modules/.bin' to $PATH
ENV PATH="./node_modules/.bin:$PATH"

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm i

# Bundle app's source code inside the Docker image:
COPY . .

# App binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
