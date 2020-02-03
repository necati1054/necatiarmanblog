export const getPosts = () => {
  return [
    {
      title: "Instagram Hashtagleri",
      slug: "instagram",
      details: "En Popüler Instagram Hashtagleri.",
      date: "31 Ocak 2020",
      link: require("./posts/instagram.md").default,
      photo: "https://www.log.com.tr/wp-content/uploads/2017/11/instagram-fotograflarina-en-uygun-etiketi-koyan-yapay-zeka-3-660x371.jpg"
    },
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
