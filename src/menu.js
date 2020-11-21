export const Menu = [
    {
        name:"DashBoard",
        fixMenu:true,
        path:"/dashboard",
        childrens:[]
    },
    {
        name:"Students",
        icon:"menu-icon fa fa-cogs",
        path:"/students",
        // fixMenu:false,
        childrens:[
            {
                name:"List",
                path:"/students/list",
                icon:"fa fa-puzzle-piece"
            },
            {
                name:"Create",
                path:"/students/create",
                icon:"fa fa-id-badge"
            },
        ]
    },
]