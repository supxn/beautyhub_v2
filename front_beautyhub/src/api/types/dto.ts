
export interface Service {
    name: string;
    price: number;
}
export interface CategoryType {
    category: string;
    services: Service[];
}
export interface MasterType {
    name: string;
    work: string;
    experience: number;
    rating: number;
    gender: "Мужчина" | "Женщина";
    address: string;
    phone: string;
    categories: CategoryType[];
    avatar: string;
    hasReviews: boolean;
    acceptsAt: "У специалиста" | "У меня" | "У меня или специалиста";
    
}

export interface FilterState {
    rating: string[];
    experience: string[];
    gender: string;
    location: string;
    category: string;
    service: string;

}