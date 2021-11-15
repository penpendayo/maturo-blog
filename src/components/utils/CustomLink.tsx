import Link from "next/link";
type Props = {
  children: string;
  href: string;
};

const CustomLink: React.FC = ({ children, href }: Props) =>
  href.startsWith("/") || href === "" ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href}  rel="noreferrer">
      {children}
    </a>
  );

export default CustomLink;
