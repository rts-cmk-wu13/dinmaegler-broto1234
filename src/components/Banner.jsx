import { NavLink } from 'react-router';
import bannerImage from '../assets/bannerImg.png';

const Banner = ({ bannerText, secondText }) => {
  return (
      <div style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
    <div className="py-12 bg-primary/90 text-center">
      <p className="text-3xl font-semibold text-white   text-center mb-2">{bannerText}</p>
      {secondText && <div>
          <NavLink to="/" className="text-white">Home</NavLink>
          <span className="text-white"> | </span>
          <NavLink to="/login" className="text-primary">Login</NavLink>
        </div>
      }
      </div>

    </div>
  )
}

export default Banner