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
            title:'Conócenos',
            path: "/#aboutMe"
        },
        {
            title:'¿Cómo funciona?',
            path: "/#funcionality"
        },
        {
            title:'Aliados',
            path: "/#partners"
        },
        {
            title:'Descarga',
            path: "/#download"
        },
    ]
}