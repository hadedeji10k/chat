import { isToday, format, isYesterday } from "date-fns";

export const formatDateTime = (date: Date | string) => {
    const formDate = new Date(date)
  if (isToday(formDate)) {
    return format(formDate, 'hh:mm a');
  } else if (isYesterday(formDate)) {
    return `Yesterday ${format(formDate, 'hh:mm a')}`;
  } else {
    return format(formDate, 'MM/dd/yyyy hh:mm a');
  }
}