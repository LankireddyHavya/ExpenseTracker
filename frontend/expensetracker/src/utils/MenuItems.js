import { dashboard, expenses, transactions, trend ,chart} from "../utils/Icons"

export const MenuItems=[
    
    {
    id: 1,
    title: 'Dashboard',
    icon:dashboard,
    link: '/dashboard'
    
    },
    {
        id: 2,
        title: 'Transaction Chart',
        icon:chart,
        link: '/dashboard'
        
        },
        {
            id: 3,
            title: 'Incomes',
            icon:trend,
            link: '/dashboard'
            
            },
            {
                id: 4,
                title: 'Expenses',
                icon:expenses,
                link: '/dashboard'
                
                },
]
