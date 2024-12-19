// BannersContext.tsx
import { IBanner } from '@/interfaces/IBanner';
import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';



interface BannersContextData {
    banners: IBanner[];
}

const BannersContext = createContext<BannersContextData | undefined>(undefined);

export const BannersProvider = ({ children }: { children: ReactNode }) => {
    const [banners, setBanners] = useState<IBanner[]>([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('https://new.caiquemarquez.com.br/app/banners.php');
                setBanners(response.data);
            } catch (error) {
                console.error('Erro ao buscar banners:', error);
            }
        };

        fetchBanners();
    }, []);

    return (
        <BannersContext.Provider value= {{ banners }
}>
    { children }
    </BannersContext.Provider>
    );
};

export const useBanners = (): BannersContextData => {
    const context = useContext(BannersContext);
    if (!context) {
        throw new Error('useBanners deve ser usado dentro de um BannersProvider');
    }
    return context;
};