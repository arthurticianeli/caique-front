import { bgColor } from "@/interfaces/BgColors";
import { ECategories } from "@/interfaces/ECategories";


export const CategoryStory = ({ category }: { category: ECategories }) => {
    return (
        <div
            className="badge position-relative"
            style={{
                textTransform: "uppercase",
            }}
        >
            {category}
            <div
                className="position-absolute badge-detail"
                style={{
                    backgroundColor: bgColor[category],
                }}
            />
        </div>
    );
};
