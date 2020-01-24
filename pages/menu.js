import Link from "next/link";
const menu = () => (
<>
<div className="hero">
  <div className="bükücü">
    <a href="/index"><img className="başlık" src="neco.png"></img></a>
    </div>
      <div className="hero-social-links">
        <Link  href="https://www.instagram.com/necati_arman_offical/">
          <a className="social-link" target="_blank" >Instagram</a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100003946455226">
          <a className="social-link" target="_blank">facebook</a>
        </Link>
        <div className="hakkında">    
            <a href="/index" className="hakkındayazı">AnaSayfa</a>
            <a href="/about" className="hakkındayazı">Hakkında</a>
            <a href="/contac" className="hakkındayazı">İletişim</a>      
        </div>
      </div>
    </div>

    <style jsx>{`
   .hero{
     text-align: center;
     margin 0 -10px 0 -10px ;
     background-color: #595245;
     
   }
   .social-link {
     margin-right: 15px;
     color:#FF00FF;
     font-size:30px;
     border-radius: 16px;
   }
   
   .bükücü {
    max-width: 774px;
    margin: 0 auto;
   }

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
    width:auto;
    height:27px;
    background-color: #A67665;
    border-radius: 8px 8px 0 0 ;
    max-width: 774px;
    margin: auto;
  }
  .hakkındayazı{
    text-align: center;
    color: #FF00FF;
    position:relative;
    top:13%;
    font-size:25px;
    border-radius: 9px;
    margin-right: 30px;
  }
  .hakkındayazı:hover{
    background-color: #fff;
    box-shadow:
    0 0 60px 20px #fff,
    0 0 100px 20px #f0f,
    0 0 140px 20px #0ff;}

  .başlık{
    color: black;
    width:60%;
    height:70px;
  }
  @media only screen and (max-width:600px){
  .başlık{
    color: black;
    width:95%;
    height:70px;
  }
  .hakkında {
    position:relative;
    top:3px;
  }
  }
 `}</style>

</>

);
export default menu;