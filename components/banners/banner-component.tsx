import { IBanner } from "@/interfaces/IBanner";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerComponentProps {
  banners: IBanner[];
  interval?: number; // Intervalo entre as transições (em ms)
  fluid?: boolean; // Define se o banner é da página principal
}

function BannerComponent({ banners, interval = 3000, fluid }: BannerComponentProps) {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  // Divide os banners em grupos de tamanho dinâmico
  const groupBanners = (banners: IBanner[], groupSize: number) => {
    const grouped: IBanner[][] = [];
    for (let i = 0; i < banners.length; i += groupSize) {
      grouped.push(banners.slice(i, i + groupSize));
    }
    return grouped;
  };

  // Define o tamanho do grupo com base na quantidade de itens
  const groupSize = Math.min(banners.length, 3); // Máximo de 3 banners por grupo
  const groupedBanners = groupBanners(banners, groupSize);

  // Alterna automaticamente entre os grupos
  useEffect(() => {
    if (groupedBanners.length > 1) {
      const timer = setInterval(() => {
        setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % groupedBanners.length);
      }, interval);

      return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
    }
  }, [groupedBanners, interval]);

  // Define classes dinâmicas para as colunas com base na quantidade de itens
  const getColClass = (size: number) => {
    switch (size) {
      case 1:
        return "col-12";
      case 2:
        return "col-12 col-md-6";
      case 3:
        return "col-12 col-md-4";
      default:
        return "col-12 col-md-6 col-lg-4";
    }
  };

  return (
    <div className={`${fluid ? "container-fluid" : "container"}`}>
      <div className="row mb-4">
        {groupedBanners[currentGroupIndex]?.map((banner) => (
          <div key={banner.id} className={`${getColClass(groupSize)} py-2`}>
            <a href={`https://${banner.link}`} target="_blank" rel={"noreferrer"}>
              <Image
                src={`/imagens/banners/${banner.image}`}
                alt={banner.title}
                width={1000}
                height={200}
                className="img-fluid"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerComponent;
