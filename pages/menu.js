import Link from "next/link";
const menu = () => (
<>
<div className="hero">
      <Link href="http://necatiarmanblog.herokuapp.com/">
          <a className="başlık"><h1 className="hero-title">Necati ARMAN</h1></a>
      </Link>
      <div className="hero-social-links">
        <Link href="https://www.instagram.com/necati_arman_offical/">
          <a className="social-link">Instagram</a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100003946455226">
          <a className="social-link">facebook</a>
        </Link>
        <div className="hakkında">            
          <a href="/about" className="hakkındayazı">Hakkında</a>
        </div>
      </div>
    </div>

    <style jsx>{`
   
   .hero{
     text-align: center;
     margin -20px 0 0 0 ;
     background-color: #808080;
   }
   .social-link {
     margin-right: 8px;
     color:black;
   }
   .hero-title {
     font-size: 48px;
   }
   a {
     color: #ff6200;
     text-decoration: none;
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
  .başlık{
    color: black;
  }
 `}</style>

</>

);
export default menu;