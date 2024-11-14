import { IBanner } from "@/interfaces/IBanner";
import { bannersMockup } from "@/mocks/bannersMock";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerComponentProps {
  startIndex: number;
  numberOfBanners: number;
}

function BannerComponent({
  startIndex,
  numberOfBanners,
}: BannerComponentProps) {
  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    async function fetchBannerData() {
      try {
        // const response = await fetch("URL_DA_API");
        // const data = await response.json();
        // setBanners(data);
        setBanners(bannersMockup);
      } catch (error) {
        console.error("Erro ao buscar os dados dos banners:", error);
      }
    }

    fetchBannerData();
  }, []);

  const sortedBanners = banners.toSorted((a, b) => a.priority - b.priority);
  const selectedBanners = sortedBanners.slice(
    startIndex,
    startIndex + numberOfBanners
  );

  const getColClass = () => {
    if (numberOfBanners === 1) return "col-12";
    if (numberOfBanners === 2) return "col-12 col-md-6";
    if (numberOfBanners === 3) return "col-12 col-md-4";
    if (numberOfBanners === 4) return "col-12 col-md-3";
    return "col-12 col-md-6 col-lg-4";
  };

  return (
    <div className="row my-4">
      {selectedBanners.map((banner, index) => (
        <div key={index} className={`${getColClass()} mb-4`}>
          <Image
            src={banner.url}
            alt={`Banner ${index}`}
            width={1200}
            height={1000}
            className="img-fluid"
          />
        </div>
      ))}
    </div>
  );
}

export default BannerComponent;
