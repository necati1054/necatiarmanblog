import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Menu from "../pages/menu";

const Home = ({ posts }) => (

  <div className="container">
    <Head>
      <title>Necati Arman Blog</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>

    <Menu></Menu>

    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}


    <style jsx global>{`
      .container {
        width: 100%;
        margin: 0 auto;
        font-family: 'Indie Flower', cursive;
        background-color:#ebc8b2;
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
      body {
        background-color: #ebc8b2;
        margin-top: 0px;
        
      }
    `}</style>
  </div>
);
Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://necatiarmanblog.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
