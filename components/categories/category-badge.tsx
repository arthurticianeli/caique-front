import { bgColor } from "@/interfaces/BgColors";
import { ECategories } from "@/interfaces/ECategories";


export const CategoryBadge = ({ category }: { category: ECategories }) => {
    return (
        <div
            className="badge badge-absolute m-2"
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
