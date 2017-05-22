export interface IArticle {
    id: number;
    title: string;
    content: string;
    updated_at: string;
    images: any[];
    category: any[];
    count_comments: number;
    count_favorites: number;

    user: any[];
    categories: any[];
    userID: number;
    userName: string;

}