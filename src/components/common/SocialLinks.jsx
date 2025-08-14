import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { SITE_CONFIG } from '../../constants/siteConfig';

const SOCIAL_ICONS = {
  facebook: { icon: FaFacebookF, color: '#1877f3' },
  instagram: { icon: FaInstagram, color: '#e4405f' },
  linkedin: { icon: FaLinkedinIn, color: '#0077b5' },
  whatsapp: { icon: FaWhatsapp, color: '#25d366' },
  youtube: { icon: FaYoutube, color: '#ff0000' },
  tiktok: { icon: FaTiktok, color: '#000000' },
  email: { icon: MdEmail, color: '#ca0000' },
  ou: { icon: GiGraduateCap, color: '#841617' }
};

function SocialLinks({ size = 40, showLabels = false }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      {Object.entries(SITE_CONFIG.socialLinks).map(([key, url]) => {
        const { icon: Icon, color } = SOCIAL_ICONS[key];
        const isExternal = !url.startsWith('mailto:');
        
        return (
          <a
            key={key}
            href={url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
          >
            <Icon size={size} color={color} />
            {showLabels && <span style={{ fontSize: '0.875rem' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
