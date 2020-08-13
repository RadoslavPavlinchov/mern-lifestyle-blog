const navigationLinks = (user) => {

    const authLinks = [
        {
            title: 'Home',
            link: '/'
        },
        // {
        //     title: 'Categories',
        //     link: '/categories'
        // },
        {
            title: 'About Us',
            link: '/about-us'
        },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
        }
    ];

    const guestLinks = [
        {
            title: 'Home',
            link: '/'
        },
        // {
        //     title: 'Categories',
        //     link: '/categories'
        // },
        {
            title: 'About Us',
            link: '/about-us'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        }
    ];

    const loggedIn = user && user.loggedIn
    const role = user.role

    if (role === 'admin') {
        authLinks.push({
            title: 'Admin',
            link: '/admin'
        })
    }

    return loggedIn ? authLinks : guestLinks;
}

export default navigationLinks;