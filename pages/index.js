import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Menu from "../pages/menu";

const Home = ({ posts }) => (
  <div className="sa"> 
  <Menu></Menu>
  <div className="container">
    <Head>
      <title>Necati Arman Blog</title>
      <link rel="icon" href="/logo2.ico" />
      <meta charSet="utf-8"></meta>
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156792922-1"></script>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
    {posts.map(post => {
    return (<div className="blog" data-aos="zoom-out">
        <a href={post.slug}>
      <img src={post.photo}></img>
        </a>
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2> 
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
        <a href={post.slug}><div className="blog-dev-oku">Okumaya Devam Et</div></a>
      </div>);
    })}
    </div>
    <a className="reklam" href="https://bc.vc/?r=295791" alt="BCVC Üye ol para kazan"><img src="https://bc.vc/images/banners/160x600.gif"/></a>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
    AOS.init();
    </script>
    <style jsx global>{`
    .container {
      width: 100%;
      margin: 0 auto;
      max-width: 800px;
    }      
    .sa {

    }
    .blog-date {
      text-align: right;
      color: red;
      padding: 0 5px 5px 0;
      font-size:20px;
    }
    a {
      color: #FF00FF;;
      text-decoration: none;
    }
    .blog{
      background-color:#e5b79a;
      border-radius:15px;
      width: 250px;
      height: 400px;
      margin: auto;
      float:left;
      margin-right:16px;
      margin: 14px  0 0 13px;
      border:1px solid red;
    }
    .blog-title{
      padding: 5px 0 0 5px;
    }
  
    .blog-text{
      padding: 0 0 0 5px;
      font-size:19px;
    }
    body {
      background-color: #A67665;
      margin-top: 0px;
      
    }
    .blog-dev-oku{
      text-align: right;
      padding: 0 5px 5px 0;
      font-size:24px;
      color:#660099;
      border-radius:16px;
    }
    .blog-dev-oku:hover{
      color: #fff;
      box-shadow:
      0 0 60px 20px #fff,
      0 0 100px 20px #f0f,
      0 0 140px 20px #0ff;}
    }

    .blog img{
      width:250px;
      height:150px;
      margin-top:5%;
      border-radius:15px;
      margin: 0 0 0 0;
    }
    @media only screen and (max-width:500px){
      .reklam{        
        display: none;
      }
      .blog {
        width:93%;
       
      }
      .blog img {
        width: 100%;
        height: 50%;
      }
    }
    `}</style>
    </div>
);
Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://necatiarmanblog.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
