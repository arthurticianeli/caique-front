import Image from "next/image";

interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <div className={`logo-container ${isScrolled ? "scrolled" : ""}`}>
      <Image
        src="/images/site/LOGO-OFICIAL.png"
        alt="Caique Marquez Logo"
        width={200}
        height={150}
        className="img-fluid"
        priority
      />
    </div>
  );
};

export default Logo;
