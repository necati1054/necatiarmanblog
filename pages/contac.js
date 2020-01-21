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
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
      <meta charSet="utf-8"></meta>
    </Head>

    <Menu></Menu>

    <div className="ilet">
      <hr className="czg1"></hr>
      <ul>
      <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100003946455226"><i class="fab fa-facebook"></i></a></li>
        <li><a target="_blank" href="https://www.instagram.com/necati_arman_offical/"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=905531883296"><i class="fab fa-whatsapp"></i></a></li>
        <li><a href="tel:553-188-3296"><i class="fas fa-mobile"></i></a></li>
        <li><a href="mailto:necati.arman1054@gmail.com"><i class="fas fa-at"></i></a></li>
        <li><a target="_blank" href="https://drive.google.com/open?id=16gJghFjDd4wJ15yreNcsthyY820QDdMy&usp=sharing"><i class="fas fa-map-marker-alt"></i></a></li>
      </ul>
      <hr className="czg2"></hr>
    </div>
    <style jsx global>{`
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
    .harita{
      margin: 200px 0 0 60px;
      position: relative;
      top:50%;
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
    `}</style>
  </div>
);

contac.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://necatiarmanblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default contac;
