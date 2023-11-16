import crypto from "crypto";

const generateRandomId = () => {
  const id = crypto.randomBytes(32).toString("hex");
  console.log(`Generated ID: ${id}`);
};

export default generateRandomId;
