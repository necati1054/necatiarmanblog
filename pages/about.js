import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Menu from "./Menu";

const about = () => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
    </Head>

    <Menu></Menu>

    <div className="yazı">
      <img src="minion.png" alt="my"/>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        margin: 0 auto;
        font-family: 'Indie Flower', cursive;
        background-color:#ebc8b2;
      }
      .hero{
        text-align: center;
        margin -20px 0 0 0 ;
        background-color: #808080;
      }
      .social-link {
        margin-right: 8px;
        color:black;
      }
      .hero-title {
        font-size: 48px;
      }
      .blog-date {
        text-align: right;
        color: red;
        padding: 0 5px 5px 0;
      }
      a {
        color: #ff6200;
        text-decoration: none;
      }
      .blog{
        background-color:#e5b79a;
        border-radius:15px;
        max-width: 650px;
        margin: auto;
      }
      .blog-title{
        padding: 5px 0 0 5px;
      }
      .blog-text{
        padding: 0 0 0 5px;
      }
      .hakkında{
        weight:auto;
        height:40px;
        background-color: #e5b79a;
        border-radius: 8px;
        max-width: 650px;
        margin: auto;
      }
      .hakkındayazı{
        text-align: center;
        color: black;
      }
      .yazı{
        margin: auto;
        height: auto;
        background-color: red;
        max-width: 650px;
        border-radius:5px;
      }
    `}</style>
  </div>
);

about.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://necatiarmanblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default about;
