/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
    title: "Ninja Coder!",
    description: "This is my new blog.",
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
        ga("G-52NDYBCFE2"),
        redirects({
            "/hello_world.html": "/hello_world",
        }),
    ],
});
