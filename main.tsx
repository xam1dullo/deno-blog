/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
    title: "Ninja Coder!",
    description: "This is my new blog.",
    // header: <header>Your custom header</header>,
    // section: <section>Your custom section</section>,
    // footer: <footer>Your custom footer</footer>,
    avatar: "https://lh3.googleusercontent.com/a/AGNmyxZkp09uhx6t8_Jgyhipf5c6duzz_m5zUkWs8RiHgg=s288",
    avatarClass: "rounded-full",
    author: "Xamidullo Xudoyberdiyev",

    middlewares: [
        // If you want to set up Google Analytics, paste your GA key here.
        // ga("UA-XXXXXXXX-X"),

        // If you want to provide some redirections, you can specify them here,
        // pathname specified in a key will redirect to pathname in the value.
        redirects({
            "/hello_world.html": "/hello_world",
        }),
    ],
});
