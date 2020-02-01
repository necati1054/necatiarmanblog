export const getPosts = () => {
  return [
    {
      title: "Epic Games",
      slug: "Epic Games",
      details: "Epic Games Üzerinden oynayabilceğiniz ücretesiz oyunlar.",
      date: "1 Şubat 2020",
      link: require("./posts/EpicGames.md").default,
      photo: "https://static-assets-prod.epicgames.com/epic-store/static/webpack/25c285e020572b4f76b770d6cca272ec.png"
    },
    {
    title: "Farming Simulator 19",
    slug: "Farming Simulator 19",
    details: "Farming Simulator 19 Bedava oldu",
    date: "31 Ocak 2020",
    link: require("./posts/FarmingSimulator19.md").default,
    photo: "https://www.merlininkazani.com/images/games/12126/109799_640.jpg"
  },
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
