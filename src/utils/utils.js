export function formatDateTime(dateTimeStr) {
  const dateTime = new Date(dateTimeStr);
  return dateTime.toDateString();
}
