import { IBanner } from "@/interfaces/IBanner";
import { bannersMockup } from "@/mocks/bannersMock";
import { useEffect, useState } from "react";

function BannerComponent() {
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

  return (
    <div>
      {banners.map((banner, index) => (
        <div key={index}>
          <img src={banner.url} alt={`Banner ${index}`} />
          <p>Prioridade: {banner.priority}</p>
        </div>
      ))}
    </div>
  );
}

export default BannerComponent;
