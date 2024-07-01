const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL ="mongodb+srv://pj9279247:casseterite123@cluster0.mssljqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(connectionURL)
    .then(() => console.log("jon board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
