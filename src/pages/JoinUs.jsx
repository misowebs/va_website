import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';

function JoinUs() {
  return (
    <div className="site-container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <h1 className="heading-xl text-center">VA Newsletter</h1>
      
      
      <h1 className="heading-xl text-center" style={{ paddingTop: '3rem', marginTop: '2rem', marginBottom: '2rem' }}>Connect with Us</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="https://www.facebook.com/venezuelanassociation/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF size={40} color="#1877f3" />
        </a>
        <a href="https://www.instagram.com/va_ou_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={40} color="#e4405f" />
        </a>
        <a href="https://www.linkedin.com/company/vaou/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn size={40} color="#0077b5" />
        </a>
        <a href="https://chat.whatsapp.com/HAlfHsPfrAM7ghg9oU3X41" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
          <FaWhatsapp size={40} color="#25d366" />
        </a>
        <a href="https://www.youtube.com/@afv_ou" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
          <FaYoutube size={40} color="#ff0000" />
        </a>
        <a href="https://www.tiktok.com/@afv_ou" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
          <FaTiktok size={40} color="#000000" />
        </a>
        <a href="mailto:va@groups.ou.edu" aria-label="Email">
          <MdEmail size={40} color="#ca0000" />
        </a>
        <a href="https://ou.campuslabs.com/engage/organization/venezuelan-association" target="_blank" rel="noopener noreferrer" aria-label="OU">
          <GiGraduateCap size={40} color="#841617" />
        </a>
      </div>
    </div>
  );
}

export default JoinUs;