import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Menu from "../pages/menu";

const about = () => (
  <div className="container">
    <Head>
      <title>Hakkında</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
    </Head>

    <Menu></Menu>

    <div className="hk">
      <img className="foto" src="sonhali.jpg" alt="NecatiARMAN" />
    </div>
    <style jsx global>{`
    body {
      background-color: #0000CC;
      margin: 0px;
    }
    .foto{
      height:160px;
      border-radius:10px;
      padding: 5px 0 0 5px;
    }
      .container {
        width: 100%;
        margin: 0 auto;
        font-family: 'Indie Flower', cursive;
        background-color:#0000CC;
      }
      a {
        color: #ff6200;
        text-decoration: none;
      }
      .hakkındayazı{
        text-align: center;
        color: black;
      }
      .hk{
        margin: auto;
        height: auto;
        background-color: #e5b79a;
        max-width: 770px;
        border-radius:10px;
        margin 10px auto
      }
    `}</style>
  </div>
);

about.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default about;
