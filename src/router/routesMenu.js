import { PAGES_URL } from "contant";

export const MENU = [
    {   //dashboard
        link: PAGES_URL.admin.url,
        icon: 'las la-home',
        label: "Bảng điều khiển"
    },
    {
        link: PAGES_URL.user.url,
        icon: 'las la-users',
        label: 'Quản lý người dùng',
    },
    {
        link: PAGES_URL.author.url,
        icon: 'las la-user-tie',
        label: 'Quản lý tác giả',
    },
    {
        link: PAGES_URL.category.url,
        icon: 'las la-folder',
        label: 'Quản lý danh mục',
    },
    {
        link: PAGES_URL.book.url,
        icon: 'las la-book-open',
        label: 'Quản lý sách',
    }
    // { //Management resources
    //     link: PAGES_URL.dashboard,
    //     icon: 'las la-folder-open',
    //     label: 'menu_management_resources',
    //     children: [
    //         {
    //             link: PAGES_URL.forgot_password,
    //             icon: 'las la-building',
    //             label: 'menu_layout_list',
    //         },
    //         {
    //             link: PAGES_URL.forgot_password,
    //             icon: 'las la-cube',
    //             label: 'menu_model_list',
    //         },
    //     ]
    // },
]
