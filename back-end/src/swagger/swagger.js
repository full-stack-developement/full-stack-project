const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/announcement.route.ts"];

swaggerAutogen(outputFile, endpointsFiles);
