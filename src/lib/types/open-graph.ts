export type Metadata =  Image & Description & {
    title?: string;
};
// & {
//     [property: string]: string;
// }

export type Description = {
    description?: string;
}

export type Image = {
    image?: string;
    alt?: string;
}