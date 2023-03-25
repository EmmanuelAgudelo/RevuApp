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
            path: "#"
        },
        {
            title:'¿Cómo funciona?',
            path: "#"
        },
        {
            title:'Aliados',
            path: "#"
        },
        {
            title:'Descarga',
            path: "#"
        },
    ]
}