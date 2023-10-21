export interface ITeam {
    name: string;
    imgURL: string;
    description: string;
}

export const Team: ITeam[] = [
    {
        name: "John Doe",
        imgURL: "https://picsum.photos/200",
        description: "I love comics"
    },
    {
        name: "Jane Doe",
        imgURL: "https://picsum.photos/201",
        description: "I'm interested in comics"
    },
    {
        name: "Bob Smith",
        imgURL: "https://picsum.photos/202",
        description: "I'm a comic fan"
    },
    {
        name: "Our Mission",
        imgURL: "https://picsum.photos/203",
        description: "Build a comic-centric web app for fans to explore, read, and discuss comics"
    },
    {
        name: "Our Vision",
        imgURL: "https://picsum.photos/204",
        description: "Become the top platform for comic fans"
    }
];
