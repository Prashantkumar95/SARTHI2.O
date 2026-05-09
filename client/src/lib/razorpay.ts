import Razorpay from "razorpay";

const key_id = process.env.RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

if (!key_id || !key_secret) {
  console.warn("Razorpay keys are missing.");
}

const razorpay = new Razorpay({
  key_id: key_id || "",
  key_secret: key_secret || "",
});

export default razorpay;