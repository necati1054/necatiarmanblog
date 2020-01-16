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
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
      <script data-ad-client="ca-pub-2037585543989384" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Head>

    <Menu></Menu>

    <div className="blog">
    <img src={post.photo}></img>
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
      .container {
        width: 100%;
        margin: 0 auto;
        font-family: 'Indie Flower', cursive;
        background-color: #0000CC;
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
        border:5px solid #ffee10;
      }
      .blog-text{
        padding: 0 0 0 5px;
      }
      .blog-title{
        padding: 5px 0 0 5px;
      } 
      body {
        background-color: #0000CC;
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
<script>
{
  //document.body.style.backgroundImage="url('yeni.jpg')"
}
</script>
BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://necatiarmanblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
