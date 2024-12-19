import BannerComponent from "@/components/banners/banner-component";
import CategorySectionCarouselStories from "@/components/categories/category-section-carousel-stories";
import PostItem from "@/components/posts/post-item";
import { useBanners } from "@/hooks/BannersContext";

import { ECategories } from "@/interfaces/ECategories";
import { IPost } from "@/interfaces/IPost";

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

function CategoryPage() {
    const { banners } = useBanners();

    const router = useRouter();
    const { category } = router.query;

    const [posts, setPosts] = useState<IPost[]>([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [scrollEnabled, setScrollEnabled] = useState(false);

    const observerRef = useRef<HTMLDivElement | null>(null);

    const categoryFormatted = ECategories[category as keyof typeof ECategories];

    const loadMorePosts = async () => {
        if (loading || !category || !hasMore) return;

        setLoading(true);

        try {
            const response = await fetch(
                `https://new.caiquemarquez.com.br/app/api.php?noticias&cat=${category}&qtd=10&offset=${offset}`
            );

            const data = await response.json();

            if (data.data.length === 0) {
                setHasMore(false); // Não há mais posts a carregar
                return;
            }

            setPosts((prevPosts) => [...prevPosts, ...data.data]);
            setOffset((prevOffset) => prevOffset + 10); // Incrementa o offset
        } catch (error) {
            console.error("Erro ao carregar posts:", error);
        } finally {
            setLoading(false);
        }
    };

    // Scroll infinito usando IntersectionObserver
    useEffect(() => {
        if (!scrollEnabled) return;

        const observerCallback: IntersectionObserverCallback = (entries) => {
            const target = entries[0];
            if (target.isIntersecting && !loading && hasMore) {
                loadMorePosts();
            }
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: "200px",
            threshold: 0,
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [scrollEnabled, hasMore, loading, offset]);

    // Carregamento inicial ao montar o componente e resetar estados ao trocar de categoria
    useEffect(() => {
        setPosts([]);
        setOffset(0);
        setHasMore(true);
        setScrollEnabled(false); // Reseta o estado de scroll infinito
        if (category) {
            loadMorePosts();
        }
    }, [category]);

    return (
        <section className="sectionCustom">
            <Head>
                <title>{categoryFormatted}</title>
                <meta
                    name="description"
                    content={`Novidades sobre Gramado na categoria de ${category}`}
                />
            </Head>

            {/* Banners no topo */}
            <BannerComponent banners={banners?.slice(0, 2)} />

            <h3 className="container">{categoryFormatted}</h3>

            {/* Carousel Stories */}
            <div className="mb-5">
                <CategorySectionCarouselStories
                    category={categoryFormatted}
                />
            </div>

            {/* Exibe os 4 primeiros posts */}
            {posts.slice(6, 10).map((post) => (
                <div key={post.post_slug} className="col-12 my-4 container">
                    <PostItem post={post} type="small" />
                </div>
            ))}

            {/* Botão "Ver Mais" */}
            {!scrollEnabled && (
                <div className="d-flex justify-content-center my-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => setScrollEnabled(true)}
                    >
                        Ver Mais
                    </button>
                </div>
            )}

            {/* Posts adicionais com banners intercalados */}
            {scrollEnabled &&
                posts.slice(10).map((post, index) => {
                    const bannerGroupIndex = Math.floor(index / 5) * 3 + 2; // Calcula o índice de início dos banners

                    return (
                        <React.Fragment key={post.post_slug}>
                            <div className="col-12 my-4 container">
                                <PostItem post={post} type="small" />
                            </div>
                            {/* Insere 3 banners a cada 5 posts */}
                            {(index + 1) % 5 === 0 && banners[bannerGroupIndex] && bannerGroupIndex < 9 && (
                                <BannerComponent
                                    banners={banners.slice(bannerGroupIndex, bannerGroupIndex + 3)}
                                />
                            )}
                            {(index + 1) % 5 === 0 && bannerGroupIndex > 9 && banners.length - bannerGroupIndex > 3 && (
                                <BannerComponent
                                    banners={banners.slice(bannerGroupIndex)}
                                />
                            )}
                        </React.Fragment>
                    );
                })}

            {/* Loader para o Scroll Infinito */}
            {scrollEnabled && hasMore && (
                <div ref={observerRef} className="d-flex justify-content-center my-4">
                    {loading ? <span>Carregando...</span> : null}
                </div>
            )}

            {/* Mensagem de fim */}
            {!hasMore && (
                <div className="d-flex justify-content-center my-4">
                    <span>Todos os posts foram carregados.</span>
                </div>
            )}
        </section>
    );
}

export default CategoryPage;
