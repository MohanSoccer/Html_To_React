import React,{lazy} from 'react';
const DashBoard = lazy(() => import("../src/Views/dashboard"))
const StudentsCreate = lazy(() => import("../src/Views/Students/studentCreate"))
const StudentsList = lazy(() => import("../src/Views/Students/studentList"))

export const Routes = [
    {
        path:"/",
        component:DashBoard,
        exact:true
    },
    {
        path:"/dashboard",
        component:DashBoard,
        exact:true
    },
    {
        path:"/students",
        component:StudentsList,
        exact:true
    },
    {
        path:"/students/create",
        component:StudentsCreate,
        
    },
    {
        path:"/students/list",
        component:StudentsList,
        
    }
]