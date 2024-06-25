export function formatTime(date: string, format: "HH:MM" | "HH:MM:SS" | "YYYY:MM:DD HH:MM:SS" = "HH:MM") {
  const dateString = date.split("T")[0];
  const timeString = date.split("T")[1].split(":");
  const hourString = timeString[0];
  const minuteString = timeString[1];
  const secondString = timeString[2];

  switch (format) {
    case "HH:MM":
      return hourString + ":" + minuteString;
    case "HH:MM:SS":
      return hourString + ":" + minuteString + ":" + secondString;
    case "YYYY:MM:DD HH:MM:SS":
      return dateString + " " + hourString + ":" + minuteString + ":" + secondString;
  }
}
