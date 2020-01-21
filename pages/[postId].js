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
      <link rel="icon" href="/favicon.ico" />
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <meta charSet="utf-8"></meta>
    </Head>

    <Menu></Menu>

    <div className="blog">
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
    <style jsx global>{`
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
      img{
        width:500px;
        height:300px;
        margin-top:5%;
        border-radius:15px;
        margin: 0 0 0 0;
      }
    `}</style>
  </div>
);
BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
