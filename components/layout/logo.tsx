import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/images/site/LOGO-OFICIAL.png"
      alt="Cauique Marquez Logo"
      width={1000}
      height={300}
      className="img-fluid"
    />
  );
}

export default Logo;
