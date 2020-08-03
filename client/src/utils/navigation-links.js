const navigationLinks = (loggedIn, user) => {

    const authLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Categories',
            link: '/categories'
        },
        {
            title: 'About Us',
            link: '/contact-us'
        },
        // {
        //     title: 'Login',
        //     link: '/login'
        // },
        // {
        //     title: 'Register',
        //     link: '/register'
        // },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
        },
        {
            title: 'Admin',
            link: '/admin'
        }
    ];

    const guestLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Categories',
            link: '/categories'
        },
        {
            title: 'About Us',
            link: '/contact-us'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        },
        // {
        //     title: 'Profile',
        //     link: `/profile/${id}`
        // }
    ];

    return loggedIn ? authLinks : guestLinks;
}

export default navigationLinks;