export const TIME_DIFF_KST_AND_UTC = 9;
export const SECOND_TO_MILLISECOND = 1000;
export const MINUTE_TO_SECOND = 60;
export const HOUR_TO_MINUTE = 60;

export function formatTime(
  date: string,
  format: "HH:MM" | "HH:MM:SS" | "YYYY:MM:DD HH:MM:SS" | "YYYY년 MM월 DD일 HH:MM" = "HH:MM",
) {
  const dateString = date.split("T")[0];
  const timeString = date.split("T")[1].split(":");
  const hourString = timeString[0];
  const minuteString = timeString[1];
  const secondString = timeString[2];
  const year = dateString.split("-")[0];
  const month = dateString.split("-")[1];
  const day = dateString.split("-")[2];

  switch (format) {
    case "HH:MM":
      return hourString + ":" + minuteString;
    case "HH:MM:SS":
      return hourString + ":" + minuteString + ":" + secondString;
    case "YYYY:MM:DD HH:MM:SS":
      return dateString + " " + hourString + ":" + minuteString + ":" + secondString;
    case "YYYY년 MM월 DD일 HH:MM":
      return `${year}년 ${month}월 ${day}일 ${hourString}:${minuteString}`;
  }
}

export const getCurrentKSTDateTimeLocal = (): string => {
  const now = new Date();
  const offset = TIME_DIFF_KST_AND_UTC * HOUR_TO_MINUTE;
  const kstTime = new Date(now.getTime() + offset * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND);

  const year = kstTime.getUTCFullYear();
  const month = String(kstTime.getUTCMonth() + 1).padStart(2, "0");
  const day = String(kstTime.getUTCDate()).padStart(2, "0");
  const hours = String(kstTime.getUTCHours()).padStart(2, "0");
  const minutes = String(kstTime.getUTCMinutes()).padStart(2, "0");

  const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  return formatTime(formattedTime, "YYYY년 MM월 DD일 HH:MM");
};

export const calculateNight = (checkIn: string, checkOut: string): number => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

  const night = timeDifference / (SECOND_TO_MILLISECOND * MINUTE_TO_SECOND * HOUR_TO_MINUTE * 24);

  return Math.round(night);
};
