import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    // {
    //     path: '',
    //     title: 'Personal',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '',
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        class: '',
        extralink: false,
        submenu: []
    },

    // {
    //     path: 'apps/chat',
    //     title: 'Inbox',
    //     icon: 'fab fa-rocketchat',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'List',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/users',
        title: 'Users',
        icon: 'sl-icon-user',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Vendors',
        icon: 'icon-Car-Wheel',
        class: 'has-arrow',
        extralink: false,
        submenu: [
            {
                path: '/pages/vendors/vendorsrequest',
                title: 'Vendors Request',
                icon: 'sl-icon-user',
                class: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/pages/vendors',
                title: 'Manage Vendors',
                icon: 'sl-icon-user',
                class: '',
                extralink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/pages/speech',
        title: 'Speech Recognition',
        icon: 'mdi mdi-account-star-variant',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/drivers',
    //     title: 'Drivers',
    //     icon: 'mdi mdi-truck',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/franchise',
    //     title: 'Franchise',
    //     icon: 'fas fa-shopping-basket',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Requests',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/driversrequest',
    //     title: 'Drivers Request',
    //     icon: 'mdi mdi-truck',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/franchiserequest',
    //     title: 'Franchise Request',
    //     icon: 'fas fa-shopping-basket',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'eSupply',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/order',
        title: 'Orders',
        icon: ' far fa-list-alt',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/timeslot',
    //     title: 'Timeslots',
    //     icon: ' fas fa-clock',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Inventory',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/foodcategories',
        title: 'Categories',
        icon: 'sl-icon-grid',
        class: '',
        extralink: false,
        submenu: []
    },
    {
      path: '/pages/fooditem',
      title: 'Product',
      icon: 'mdi mdi-bowl',
      class: '',
      extralink: false,
      submenu: []
    },
    // {
    //     path: '/pages/Inventory',
    //     title: 'Inventory',
    //     icon: 'mdi mdi-calendar-text',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Marketing',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/pages/banner',
    //     title: 'Banner',
    //     icon: 'far fa-images',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '/pages/rewards',
    //     title: 'Coupons ',
    //     icon: 'ti-gift',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    // {
    //     path: '',
    //     title: 'Notifications',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/notification',
        title: 'Broadcast Notification',
        icon: 'sl-icon-bell',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '',
    //     title: 'Reporting',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    //  {
    //     path: '',
    //     title: 'Reporting',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '/pages/revenue',
        title: 'Revenue',
        icon: 'mdi mdi-chart-areaspline',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/reviews',
    //     title: 'Reviews',
    //     icon: 'mdi mdi-account-star-variant',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '/pages/support',
        title: 'Customer Support',
        icon: 'mdi mdi-account-star-variant',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/sos',
        title: 'SOS',
        icon: 'mdi mdi-bell-ring',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/membership',
        title: 'Membership Plans',
        icon: 'mdi mdi-account-star-variant',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/pages/geofence',
        title: 'Geofence',
        icon: 'icon-Monitor-Analytics',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '/pages/couponsrequest',
    //     title: 'Coupons Detail',
    //     icon: 'icon-Monitor-Analytics',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '/pages/manage_admin',
        title: 'Sub-Admin',
        icon: 'mdi mdi-chart-arc',
        class: '',
        extralink: false,
        submenu: []
    },
    // {
    //     path: '',
    //     title: 'CMS Pages',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     extralink: true,
    //     submenu: []
    // },
    {
        path: '',
        title: 'CMS Pages',
        icon: 'icon-Car-Wheel',
        class: 'has-arrow',
        extralink: false,
        submenu: [
        {
            path: '/pages/about',
            title: 'Terms & Conditions',
            icon: 'far fa-file-alt',
            class: '',
            extralink: false,
            submenu: []
        },
        {
            path: '/pages/contact',
            title: 'About Us',
            icon: "fas fa-address-card",
            class: '',
            extralink: false,
            submenu: []
        },
        {
            path: '/pages/faq',
            title: "FAQ's",
            icon: 'fas fa-comment-alt',
            class: '',
            extralink: false,
            submenu: []
    },
    {
        path: '/pages/privacy',
        title: 'Privacy Policy',
        icon: 'fas fa-lock',
        class: '',
        extralink: false,
        submenu: []
         },
       ]
    },
//     {
//         path: '',
//         title: 'Extra',
//         icon: 'mdi mdi-dots-horizontal',
//         class: 'nav-small-cap',
//         extralink: true,
//         submenu: []
//     },
    // {
    //     path: 'login',
    //     title: 'Logout',
    //     icon: 'fa fa-power-off',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // },

    // {
    //     path: '',
    //     title: 'Ecommerce Pages',
    //     icon: 'icon-Shopping-Bag',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/ecom/products',
    //             title: 'Products',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/ecom/cart',
    //             title: 'Cart',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/ecom/edit',
    //             title: 'Edit Products',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/ecom/details',
    //             title: 'Product Details',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
            // {
            //     path: '/ecom/orders',
            //     title: 'Orders',
            //     icon: '',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // },
            // {
            //     path: '/ecom/checkout',
            //     title: 'Checkout',
            //     icon: '',
            //     class: '',
            //     extralink: false,
            //     submenu: []
            // }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Authentication',
    //     icon: 'icon-Administrator',
    //     class: 'has-arrow',
    //     extralink: false,

    //     submenu: [

    //         {
    //             path: '/authentication/login2',
    //             title: 'Login 2',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/signup',
    //             title: 'Register',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/signup2',
    //             title: 'Register 2',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/404',
    //             title: '404',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/authentication/lock',
    //             title: 'Lockscreen',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
        // ],

    //  },
    //  {
    //     path: '/login',
    //     title: 'Login',
    //     icon: '',
    //     class: '',
    //     extralink: false,
    //     submenu: []
    // }
    // {
    //     path: '',
    //     title: 'Pages',
    //     icon: 'icon-Files',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/pages/profile',
    //             title: 'Profile',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/pricing',
    //             title: 'Pricing',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/invoice',
    //             title: 'Invoice',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/pages/helperclasses',
    //             title: 'Helper Classes',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/starter',
    //             title: 'Starter Page',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Timeline',
    //     icon: 'mdi mdi-apple-safari',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/timeline/left',
    //             title: 'Left Timeline',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/timeline/right',
    //             title: 'Right Timeline',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/timeline/center',
    //             title: 'Center Timeline',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Icons',
    //     icon: 'icon-Eyeglasses-Smiley',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '/icons/fontawesome',
    //             title: 'Fontawesome',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/icons/simpleline',
    //             title: 'Simple Line Icons',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/icons/material',
    //             title: 'Material Icons',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         },
    //         {
    //             path: '/icons/iconmind',
    //             title: 'Iconmind Icons',
    //             icon: '',
    //             class: '',
    //             extralink: false,
    //             submenu: []
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     title: 'Menu Levels',
    //     icon: 'mdi mdi-notification-clear-all',
    //     class: 'has-arrow',
    //     extralink: false,
    //     submenu: [
    //         {
    //             path: '',
    //             title: 'Second Level',
    //             icon: '',
    //             class: '',
    //             extralink: true,
    //             submenu: []
    //         },
    //         {
    //             path: '',
    //             title: 'Second Child',
    //             icon: '',
    //             class: 'has-arrow',
    //             extralink: false,
    //             submenu: [
    //                 {
    //                     path: '',
    //                     title: 'Third 1.1',
    //                     icon: '',
    //                     class: '',
    //                     extralink: false,
    //                     submenu: []
    //                 },
    //                 {
    //                     path: '',
    //                     title: 'Third 1.2',
    //                     icon: '',
    //                     class: '',
    //                     extralink: false,
    //                     submenu: []
    //                 }
    //             ]
    //         }
    //     ]
    // }
];
