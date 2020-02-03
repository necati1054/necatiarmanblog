export const getPosts = () => {
  return [
    {
      title: "Epic Games",
      slug: "EpicGames",
      details: "Epic Games üzerinden Bedava oynaya bileceğiniz oyunlar",
      date: "01 Şubat 2020",
      link: require("./posts/EpicGames.md").default,
      photo: "https://iasbh.tmgrup.com.tr/250b3c/752/395/0/26/739/415?u=https://isbh.tmgrup.com.tr/sbh/2019/12/20/epic-games-storedan-buyuk-kampanya-epic-gameste-60-liralik-indirim-kodu-ve-cok-sayida-oyun-bedava-1576830918786.jpg"
    },
    {
      title: "Farming Simulator 19",
      slug: "FarmingSimulator19",
      details: "FarmingSimulator19 bedava oldu ",
      date: "31 Ocak 2020",
      link: require("./posts/FarmingSimulator19.md").default,
      photo: "https://steamcdn-a.akamaihd.net/steam/apps/787860/header.jpg?t=1578412042"
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
