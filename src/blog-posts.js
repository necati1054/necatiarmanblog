export const getPosts = () => {
  return [
    {
      title: "yazı sitili",
      slug: "font",
      details: "Web sitesi yazı sitili değiştirme.",
      date: "21 Ocak 2020",
      link: require("./posts/font.md").default,
      photo: "https://i.hizliresim.com/9YnBbN.jpg"
    },
    {
      title: "Css Hover Kullanımı",
      slug: "hover",
      details: "Css Hover Kullanımı.",
      date: "19 Ocak 2020",
      link: require("./posts/hover.md").default,
      photo: "https://i.hizliresim.com/bvno9Z.jpg"
    },
    {
      title: "Markdown",
      slug: "Markdown",
      details: "Bu yazıda Markdown yazı sitillerini derledik.",
      date: "19 Ocak 2020",
      link: require("./posts/markdown.md").default,
      photo: "https://i.hizliresim.com/OrGXa4.jpg"
    }
  ];
};
