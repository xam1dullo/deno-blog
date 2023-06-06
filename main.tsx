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
    links: [
        { title: "Email", url: "mailto:khkhamidullo@gmail.com" },
        { title: "GitHub", url: "https://github.com/xam1dullo" },
        { title: "Twitter", url: "https://twitter.com/xam1dullo" },
        { title: "linkedin", url: "https://www.linkedin.com/in/xam1dullo/" },
        { title: "Telegram", url: "https://www.t.me/khkhamidullo" },
    ],
    lang: "uz",

    middlewares: [
        // If you want to set up Google Analytics, paste your GA key here.
        ga("G-52NDYBCFE2"),

        // If you want to provide some redirections, you can specify them here,
        // pathname specified in a key will redirect to pathname in the value.
        redirects({
            "/hello_world.html": "/hello_world",
        }),
    ],
});
