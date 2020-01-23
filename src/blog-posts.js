export const getPosts = () => {
  return [
    {
      title: "yazı sitili",
      slug: "font",
      details: "Web sitesi yazı sitili değiştirme.",
      date: "21 Ocak 2020",
      link: require("./posts/font.md").default,
      photo: "https://lh5.googleusercontent.com/V_-lY8GY-xoKXurXM-fLIeREkL6exjw4pLOUgNKgGTZBgRXoqxUr3XXvgQo-TRNc8vy8HWJCf8eea7v4WUoN=w1920-h937-rw"
    },
    {
      title: "Css Hover Kullanımı",
      slug: "hover",
      details: "Css Hover Kullanımı.",
      date: "19 Ocak 2020",
      link: require("./posts/hover.md").default,
      photo: "https://lh6.googleusercontent.com/qsXL27NUmtdU57rLiaVG0CYdUdMYusVaN7guwhVdfdYsgZL-Q1qz7miTky5uJpQ43Jr56EcD_hzFISr4wyP3=w1366-h625-rw"
    },
    {
      title: "Markdown",
      slug: "Markdown",
      details: "Bu yazıda Markdown yazı sitillerini derledik.",
      date: "19 Ocak 2020",
      link: require("./posts/markdown.md").default,
      photo: "https://lh4.googleusercontent.com/B320Vv1Pd71I8xFYBdCrBrb8zpYfILg3crEtznpRMbPsjlpuslerYnP29XoGVqLhTda1PUlaMT4ZP08ccWQg=w1366-h625-rw"
    }
  ];
};
