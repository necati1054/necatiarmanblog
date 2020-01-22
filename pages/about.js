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
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

    <Menu></Menu>

    <div className="hk">
      <img className="foto" src="site2.png" alt="NecatiARMAN" data-aos="fade-down"/>
      <p>Merhaba ben Necati ARMAN 12. sınıf öğrencisiyim 
        üniversite sınavına hazırlanıyorum ve boş zamanlarım da ise program
        yazmak yada web siteleri ile ilgileniyorum. Sosyal medyadan takip etmeyi unutmayın.
      </p>
    </div>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>

    <style jsx global>{`
    body {
      background-color: #A67665;
      margin: 0px;
    }
    .foto{
      height:70%;
      padding: 5px 0 0 5px;
      position:relative;
      left:30%;
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
        float: left;
      }

      @media only screen and (max-width:1200px){
        .hk{
          width:100%;
        }
        .hk>img{
          height:60%;
          padding: 5px 0 0 5px;
          position:relative;
          left:30%;
        }
      }
      @media only screen and (max-width:850px){
        .hk{
          width:100%;
        }
        .hk>img{
          height:50%;
          padding: 5px 0 0 5px;
          position:relative;
          left:30%;
        }
      }
      @media only screen and (min-width:100px) and (max-width:500px){
        .hk{
          width:100%;
        }
        .hk>img{
          height:40%;
          padding: 5px 0 0 5px;
          position:relative;
          left:30%;
        }
      }
    `}</style>

  </div>
);
about.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`https://necatiarmanblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default about;
