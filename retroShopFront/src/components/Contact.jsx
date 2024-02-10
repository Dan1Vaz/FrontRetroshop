import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

const Contact = () => {
  return (
    <div className=' flex justify-center flex-col items-center text-gray-800 text-center pt-[80px] ml-20 '>
   
      
      <div className=" flex flex-col ">
       <h2>CONTACTO</h2>
       <p>Rúa Real, 1, </p> 
       <p> 15003 A Coruña</p>
       <p> T:981897800</p>
       <p> Email:retroshooop@gmail.com</p>
      </div>

      <div className="text-red-500 ">
      <Link href="https://www.facebook.com/profile.php?id=61556001704868" target="_blank" rel="noopener noreferrer">
      <FacebookIcon />
      </Link>
 
    <Link href=" https://twitter.com/RetroShop__" target="_blank" rel="noopener noreferrer">
        <TwitterIcon/>
        </Link>
        <Link href=" https://www.pinterest.es/retroshooop/" target="_blank" rel="noopener noreferrer">
        <PinterestIcon/>
     </Link>
        <InstagramIcon/>
      </div>
    </div>
  )
}

export default Contact;
