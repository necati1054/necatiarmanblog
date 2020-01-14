export const getPosts = () => {
  return [
    {
      title: "deneme 1 2 3",
      slug: "123",
      details:"Bu bir denemedir",
      date: "13.01.2020",
      link: require("./posts/123.md").default,
      photo: "https://picsum.photos/700/420"
    },
    {
      title: "bu bir deneme yazısıdır",
      slug: "deneme",
      details: "Bu bir denemedir",
      date: "26 Aralık 2019",
      link: require("./posts/deneme.md").default,
      photo: "https://picsum.photos/id/237/200/300"
    },
    {
      title: "1500TL ödül! Sen de katılma!",
      slug: "yarisma",
      details: "Bu bir denemedir",
      date: "5 Aralık 2019",
      link: require("./posts/yarisma.md").default,
      photo: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      title: "Örnek yazı",
      slug: "ornek-yazi",
      details: "Bu bir denemedir",
      date: "3 Aralık 2019",
      link: require("./posts/ornek-yazi.md").default,
      photo: "https://picsum.photos/200/300?grayscale"
    }
  ];
};
