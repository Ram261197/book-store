FROM node:24-alpine3.21
WORKDIR /app
COPY . .
RUN npm install --production


# Expose the app port
EXPOSE 3001

# To run the app
CMD ["npm","start"]
