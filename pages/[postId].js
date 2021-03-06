import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Menu from "../pages/menu";


const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Necati Arman Blog</title>
      <link rel="icon" href="/logo2.ico" />
      <meta charSet="utf-8"></meta>
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-156792922-1"></script>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </Head>

    <Menu></Menu>

    <div className="blog" data-aos="zoom-out">
      <a href={post.slug}>
    <img src={post.photo}></img>
    </a>
      <h2 className="blog-title">
      <Link href={post.slug}>
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.link} />
      </div>
      <div className="blog-date">{post.date}</div>
    </div>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
    AOS.init();
    </script>
    <style jsx global>{`
    code {
      padding: 2px 4px;
      font-size: 90%;
      color: red;
      background-color: black;
      border-radius: 4px;
  }
    .blog-title-link{
      color:#FF00FF;
    }
    .blog img{
      position:relative;
      left:19%;
    }
      .container {
        width: 100%;
        margin: 0 auto;
        background-color: #A67665;
        font-size:17px;
      }
      .blog-date {
        text-align: right;
        color: red;
        padding: 0 5px 5px 0;
        font-size:20px;
      }
      a {
        color: #ff6200;
        text-decoration: none;
      }
      .blog{
        background-color:#e5b79a;
        border-radius:15px;
        max-width: 777px;
        margin: auto;
        border:2px solid red;
        margin-top:5px;
      }
      .blog-text{
        padding: 0 0 0 5px;
      }
      .blog-title{
        padding: 5px 0 0 5px;
      } 
      body {
        background-color: #A67665;
        margin-top: 0px;
      }
      .blog img{
        width:500px;
        height:300px;
        margin-top:5%;
        border-radius:15px;
        margin: 0 0 0 0;
      }
      @media only screen and (max-width:500px){
        .blog img{
          position:relative;
          left:19%;
          margin: 0 0 0 -40px;
          width:300px;
          height:200px;
          border-radius:15px;
          margin: 0 150px 0 0;
        }
        .blog{
          margin 13px 0 0 0;
        }
      }
      @media only screen and (max-width:400px){
        .blog img{
          position:relative;
          left:19%;
          margin: 0 0 0 -40px;
          width:300px;
          height:200px;
          border-radius:15px;
        }
        .blog{
          margin 13px 0 0 0;
        }
      }
    `}</style>
  </div>
);
BlogPost.getInitialProps = async ({ req, query }) => {
  //const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const res = await fetch(`http://necatiarmanblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
