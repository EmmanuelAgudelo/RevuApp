interface IRoute {
    title:string;
    path: string;
}

interface IRoutes {
    landing: IRoute[]
}

export const routes: IRoutes = {
    landing:[
        {
            title:'About Us',
            path: "/#aboutMe"
        },
        {
            title:'How It Works?',
            path: "/#funcionality"
        },
        {
            title:'Partners',
            path: "/#partners"
        },
        {
            title:'Download',
            path: "/#download"
        },
    ]
}