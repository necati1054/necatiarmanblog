import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Menu from "../pages/menu";

const contac = () => (
  <div className="container">
    <Head>
      <title>İletişim</title>
      <link rel="icon" href="/logo2.ico" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
      <meta charSet="utf-8"></meta>
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156792922-1"></script>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </Head>

    <Menu></Menu>

    <div className="ilet">
      <hr className="czg1"></hr>
      <ul> 
        <li data-aos="zoom-out"><a target="_blank" href="https://www.facebook.com/profile.php?id=100003946455226"><i className="fab fa-facebook"></i></a></li>
        <li data-aos="zoom-out"><a target="_blank" href="https://www.instagram.com/necati_arman_offical/"><i className="fab fa-instagram"></i></a></li>
        <li data-aos="zoom-out"><a href="https://api.whatsapp.com/send?phone=905531883296"><i className="fab fa-whatsapp"></i></a></li>
        <li data-aos="zoom-out"><a href="tel:553-188-3296"><i className="fas fa-mobile"></i></a></li>
        <li data-aos="zoom-out"><a href="mailto:necati.arman1054@gmail.com"><i className="fas fa-at"></i></a></li>
        <li data-aos="zoom-out"><a target="_blank" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617057.0556780084!2d28.894091070481544!3d37.665315750523604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c72153d6334ac9%3A0xae0ed24f9b70eb3e!2sDenizli!5e0!3m2!1str!2str!4v1580336612094!5m2!1str!2str"><i className="fas fa-map-marker-alt"></i></a></li>
      </ul>
      <hr className="czg2"></hr>
      </div>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
    AOS.init();
    </script>

    <style jsx global>{`
    p{
      text-align: center;
    }
    body {
      background-color: #A67665;
      margin: 0px;
    }
    .czg1{
      position: relative;
      top:15%;
      max-width:80%;
      border:2px solid red;
      transition: .5s;
    }
    .czg1:hover{
      border:2px solid yellow;
    }
    .czg1:hover:before{
      transition: .5s;
      transform: scale(.9);
      z-index: -1;
    }
    .czg1:hover:before{
      transform: scale(1.1);
    }
    .czg2 {
      position: relative;
      top:40%;
      max-width:80%;
      border:2px solid red;
      transition: .5s;
    }
    .czg2:hover{
      border:2px solid yellow;
    }
    .czg2:hover:before{
      transition: .5s;
      transform: scale(.9);
      z-index: -1;
    }
    .czg2:hover:befor{
      transform: scale(1.1);
    }
  
    .container {
        width: 100%;
        margin: 0 auto;
        background-color:#A67665;
    }
    a {
        color: #ff6200;
        text-decoration: none;
    }
    .ilet{
      height:420px;
      background-color: #e5b79a;
      max-width: 770px;
      border-radius:10px;
      margin: 10px auto;
      border: 2px solid red;
    }
    ul{
      margin:0;
      padding:0;
      display:flex;
      position: absolute;
      top:45%;
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
      background-color:white;
      box-shadow: 0 0 5px #ffee10;
      text-shadow: 0 0 5px red;
    }
    @media only screen and (max-width:500px) {
      .czg1{
        position:relative;
        top:16%;
      }
      .czg2{
        position:relative;
        top:41%;
      }
      ul li {
        margin: auto;
        height:100%;
      }
      ul{
        margin:0;
        padding:0;
        display:flex;
        position: absolute;
        top:34%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }
    @media only screen and (max-width:370px){
      ul li {
        margin: auto;
        height:100%;
      }
      ul{
        margin:0;
        padding:0;
        display:flex;
        position: absolute;
        top:44%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }
    } 
    `}</style>
  </div>
);

contac.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`https://necatiarmanblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default contac;
