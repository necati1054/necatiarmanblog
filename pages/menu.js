import Link from "next/link";
const menu = () => (
<>
<div className="hero">
  <div>
    <a href="http://necatiarmanblog.herokuapp.com/"><img className="başlık" src="neco.png"></img></a>
    </div>
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
     margin 0 -10px 0 -10px ;
     background-color: #808080;
     
   }
   .social-link {
     margin-right: 15px;
     color:#FF00FF;
     font-size:30px;
     border-radius: 16px;
   }
   
   .social-link:hover{color:red}

   .social-link:hover{
    background-color: #fff;
    box-shadow:
    0 0 60px 20px #fff,
    0 0 100px 20px #f0f,
    0 0 140px 20px #0ff;
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
    background-color: #0000CC;
    border-radius: 8px 8px 0 0 ;
    max-width: 774px;
    margin: auto;
  }
  .hakkındayazı{
    text-align: center;
    color: red;
    position:relative;
    top:13%;
    font-size:25px;
    border-radius: 15px;
  }
  .hakkındayazı:hover{
    background-color: #fff;
    box-shadow:
    0 0 60px 20px #fff,
    0 0 100px 20px #f0f,
    0 0 140px 20px #0ff;}

  .başlık{
    color: black;
    weight:1000px;
    height:70px;
  }
 `}</style>

</>

);
export default menu;