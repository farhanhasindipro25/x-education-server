const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 5000;

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://localhost:27017/x-education-server");
    console.log("Database connection successfull");

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

bootstrap();
