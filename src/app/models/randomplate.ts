export interface Restaurant {
    restaurant: string;
    dishes:     Dish[];
}

export interface Dish {
    name:        string;
    description: string;
    price:       number;
}
