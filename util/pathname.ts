import { CATEGORY_MAP } from "@/data/category";

export const pathnameFilter = (pathname : string) => {
        // find subcategory
        const pathnameSplit = pathname.split('/').filter(Boolean);
        const mainCategory = pathnameSplit[0]; // company
        const subCategory = pathnameSplit[1]; // business, delivery, address
         const categoryName = CATEGORY_MAP[mainCategory];
        const subcategoryName = categoryName?.categories?.find(c => c.url === subCategory);
        return subcategoryName;
}