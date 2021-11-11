import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time className="align-middle" dateTime={dateString}>
      {format(date, "yyyy/MM/dd HH:mm")}
    </time>
  );
}

