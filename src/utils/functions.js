import moment from "moment-timezone";

// Function to convert Prisma/Postgres UTC date to India time string
export const formatDateTime = (utcDate, timezone = "Asia/Kolkata") => {
  if (!utcDate) return "";

  return moment(utcDate)
    .tz("Asia/Kolkata") // Convert to India time
    .format("DD-MM-YYYY hh:mm:ss A"); // hh = 12-hour format, A = AM/PM
};
