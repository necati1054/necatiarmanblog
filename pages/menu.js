import Link from "next/link";
const menu = () => (
<>
<div className="hero">
      
          <a href="http://necatiarmanblog.herokuapp.com/" className="başlık"><h1 className="hero-title">Necati ARMAN</h1></a>
      
      <div className="hero-social-links">
        <Link  href="https://www.instagram.com/necati_arman_offical/">
          <a className="social-link" target="_blank" >Instagram</a>
        </Link>
        <Link  href="https://www.facebook.com/profile.php?id=100003946455226">
          <a className="social-link" target="_blank">facebook</a>
        </Link>
        <div className="hakkında">            
          <a href="/about" className="hakkındayazı">Hakkında</a>
        </div>
      </div>
    </div>

    <style jsx>{`
   
   .hero{
     text-align: center;
     margin -32px -10px 0 -10px ;
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