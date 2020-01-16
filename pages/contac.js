import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Menu from "../pages/menu";

const contac = () => (
  <div className="container">
    <Head>
      <title>İletişim</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/v4-shims.css"></link>
    </Head>

    <Menu></Menu>

    <div className="ilet">
      <ul>
        <li><a target="_blank" href="https://www.instagram.com/necati_arman_offical/"><i class="fab fa-facebook"></i></a></li>
        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100003946455226"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=905531883296"><i class="fab fa-whatsapp"></i></a></li>
        <li><a href="tel:553-188-3296"><i class="fas fa-mobile"></i></a></li>
        <li><a href="mailto:necati.arman1054@gmail.com"><i class="fas fa-at"></i></a></li>
      </ul>
    </div>
    <style jsx global>{`
    body {
      background-color: #0000CC;
      margin: 0px;
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
    .ilet{
      margin: auto;
      height: 420px;
      background-color: #e5b79a;
      max-width: 770px;
      border-radius:10px;
      margin 10px auto
    }
    ul{
      margin:0;
      padding:0;
      display:flex;
      position: absolute;
      top:60%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    ul li{
      list-style:none;
      margin: 0 20px;
    }
    ul li a{
      position: relative;
      display: block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: #333;
      border-radius: 50%;
      font-size:3 0px;
      color: #666;
      transition: .5s;
    }
    ul li a:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #ffee10;
      transition: .5s;
      transform: scale(.9);
      z-index: -1;
    }
    ul li a:hover:before{
      transform: scale(1.1);
      box-shadow: 0 0 15px #ffee10;
    }
    ul li a:hover{
      color:ffee10;
      box-shadow: 0 0 5px #ffee10;
      text-shadow: 0 0 5px #ffee10;
    }
    `}</style>
  </div>
);

contac.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default contac;
