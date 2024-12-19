
import { IPost } from '@/interfaces/IPost';
import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface CategoryCount {
    [category: string]: number;
}

interface PostsDestaqueContextData {
    posts: IPost[];
    categoryCount: CategoryCount;
}

const PostsDestaqueContext = createContext<PostsDestaqueContextData | undefined>(undefined);

export const PostsDestaqueProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [categoryCount, setCategoryCount] = useState<CategoryCount>({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://new.caiquemarquez.com.br/app/destaques.php');
                const fetchedPosts: IPost[] = response.data;

                // Calcular a contagem de posts por categoria
                const categoryCounts = fetchedPosts.reduce((acc: CategoryCount, post) => {
                    const category = post.categoria_nome;
                    if (category) {
                        acc[category] = (acc[category] || 0) + 1;
                    }
                    return acc;
                }, {});

                setPosts(fetchedPosts);
                setCategoryCount(categoryCounts);
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PostsDestaqueContext.Provider value={{ posts, categoryCount }}>
            {children}
        </PostsDestaqueContext.Provider>
    );
};

export const usePostsDestaque = (): PostsDestaqueContextData => {
    const context = useContext(PostsDestaqueContext);
    if (!context) {
        throw new Error('usePostsDestaque deve ser usado dentro de um PostsDestaqueProvider');
    }
    return context;
};