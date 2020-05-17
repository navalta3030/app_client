/* eslint-disable no-undef */
const API_SERVER = process.env.SERVER_URL || "http://health.marknavalta.com"; // :8080 if running in kubernetes
const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID ||
  "866451246367-25unilrhdui0pi1s9clnba697e9c89ud.apps.googleusercontent.com";
const LOCAL_STORAGE_AUTH_NAME = "jwt";
const ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".gif", ".png", ".gif", ".jpeg"];

// Tables
const IMAGE_UPLOAD_API_RESPONSE_COLUMNS_TABLE = [
  "#",
  "File Name",
  "Disease",
  "Accuracy"
];

const IMAGE_RECORD_API_RESPONSE_COLUMNS_TABLE = [
  "#",
  "Image",
  "File Name",
  "Assistant Prediction",
  "Doctor Prediction"
];

export {
  API_SERVER,
  GOOGLE_CLIENT_ID,
  LOCAL_STORAGE_AUTH_NAME,
  ALLOWED_IMAGE_EXTENSIONS,
  IMAGE_UPLOAD_API_RESPONSE_COLUMNS_TABLE,
  IMAGE_RECORD_API_RESPONSE_COLUMNS_TABLE
};
