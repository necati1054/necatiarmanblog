export const getPosts = () => {
  return [
    {
      title: "bu bir deneme yazısıdır",
      slug: "deneme",
      details: require("./posts/deneme.md").default,
      date: "26 Aralık 2019"
    },
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019"
    }
  ];
};
