import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative flex flex-col-reverse h-24">
        <p className="text-center">
          © 2021
          <Link href="/">
            <a className="text-gray-800"> maturo.penpen-dev.com</a>
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
