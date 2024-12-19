import { ECategories } from "@/interfaces/ECategories";

export const extractFirstSentence = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const firstParagraph = doc.querySelector('p');
    if (firstParagraph) {
        const firstSentence = firstParagraph.textContent?.split('.')[0] + '.';
        return firstSentence;
    }
    return '';
};

export const domParserHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
}

export function getEnumKeyByValue(enumObj: any, value: any): string | undefined {
    return Object.keys(enumObj).find(key => enumObj[key] === value);
}

export const getEnumCategoriesKeyValue = (value: string) => {
    return Object.keys(ECategories).find((key) => ECategories[key as keyof typeof ECategories] === value);
}

export const convertStringToHtml = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.innerHTML || ''; // Retorna o HTML com as tags preservadas
};