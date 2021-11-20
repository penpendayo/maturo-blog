import { parseISO, format } from "date-fns";

export default function Date({
  dateString,
  dateType,
}: {
  dateString: string;
  dateType: string;
}) {
  const date = parseISO(dateString);
  return (
    <time className="align-middle" dateTime={dateString} itemProp={dateType}>
      {format(date, "yyyy/MM/dd HH:mm")}
    </time>
  );
}
