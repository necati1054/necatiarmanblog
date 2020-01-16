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
    </Head>

    <Menu></Menu>

    <div className="hk">
        <img className="foto" src="site.png" alt="NecatiARMAN" />
      <p>Merhaba ben Necati ARMAN 12. sınıf öğrencisiyim 
        üniversite sınavına hazırlanıyorum ve boş zamanlarım da ise program
        yazmak yada web siteleri ile ilgileniyorum. Sosyal medyadan takip etmeyi unutmayın.
      </p>
    </div>
    <style jsx global>{`
    body {
      background-color: #0000CC;
      margin: 0px;
    }
    .foto{
      height:300px;
      border-radius:10px;
      padding: 5px 0 0 5px;
      position:relative;
      left:30%;
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
      .hk{
        height: 420px;;
        background-color: #e5b79a;
        max-width: 770px;
        border-radius:10px;
        margin: 10px auto;
        border: 2px solid red; 
      }
      p{
        font-size: 20px;
        text-align:center;
        margin: 0 0 0 0;
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
