const navigationLinks = (id) => {

    const links = [
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
        {
            title: 'Profile',
            link: `/profile/${id}`
        }
    ];

    return links;
}

export default navigationLinks;