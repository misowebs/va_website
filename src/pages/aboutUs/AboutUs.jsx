import { Link } from 'react-router-dom'
import './AboutUs.css';
import globalPics from '../../data/gallery/GlobalPics.json';
import { getCurrentYear } from '../../utils/helpers';
import { CDN } from '../../constants/siteConfig';

const execNames = [
  ['President', 'Maria Garcia', 'From Maracaibo, Venezuela, Maria is a sophomore in Political Science.'],
  ['Vice President', 'Princess Torres', 'From Jalisco, Mexico, Princess is a junior in Business Administration.'],
  ['Treasurer', 'Sofi Quintero', 'From Caracas, Venezuela, Sofi is a junior in Psychology.'],
  ['Secretary', 'Lucy Torres', 'From Jalisco, Mexico, Lucy is a junior in Business Administration.']
];

const execTeam = globalPics.executives.images.map((img, i) => {
  const [role, name, desc] = execNames[i] || ["", "", ""];
  return { img: `${CDN}/${globalPics.executives.folder}${img}`, name, role, desc, };
});

const galleryImages = globalPics.gallery.images.map(img => `${CDN}/${globalPics.gallery.folder}${img}`);

function AboutUs() {
  return (
    <div className="aboutus-root">
      {/* Section 1: Title */}
      <section className="section text-center">
        <h1 className="heading-xl">Meet Our Executive Team</h1>
        <p className="text-lg max-w-prose aboutus-year-text">
          {(() => {
            const now = new Date();
            const year = getCurrentYear();
            if (now.getMonth() < 7) { return `For the ${year - 1}-${year} academic year.`;
            } else { return `For the ${year}-${year + 1} academic year.`; }
          })()}
        </p>
      </section>

      {/* Section 2: Executive Team */}
      <section className="section text-center">
        <div className="aboutus-exec-team">
          {execTeam.map((member, i) => (
            <div className="aboutus-exec-card" key={i}>
              <img src={member.img} alt={member.name} className="aboutus-exec-img" />
              <h3 className="aboutus-exec-name">{member.name}</h3>
              <div className="aboutus-exec-role">{member.role}</div>
              <p className="aboutus-exec-desc">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Become an Executive Member */}
      <section className="section text-center aboutus-exec-member-section">
        <h2 className="heading-xl">Become an Executive Member</h2>
        <p className="text-lg max-w-prose aboutus-exec-member-text">
        Join our executive team and play a pivotal role in shaping the future of the Venezuelan community. We're 
        actively looking for individuals passionate about Venezuelan culture, with a talent for leadership and a 
        desire to make a difference. As an executive member, you'll have the opportunity to lead projects, organize 
        events, and foster a vibrant culture. Contact us to learn how you can become a part of our dynamic team.
        </p>
      </section>

      {/* Section 4: Scrolling Gallery */}
      <section className="section text-center">
        <div className="aboutus-strip-gallery-wrapper">
          <div className="aboutus-strip-fade left"></div>
          <div className="aboutus-strip-gallery">
            {galleryImages.concat(galleryImages).map((img, i) => (
              <img src={img} alt={`Gallery ${i+1}`} className="aboutus-strip-img" key={i} />
            ))}
          </div>
          <div className="aboutus-strip-fade right"></div>
        </div>
      </section>

      {/* Section 5: Get Involved */}
      <section className="section text-center stack-lg aboutus-get-involved">
        <h2 className="heading-xl">Get Involved</h2>
        <p className="text-lg max-w-prose aboutus-get-involved-text">
          Become a member of our vibrant association and unlock a world of rich experiences!
        </p>
        <ul className="aboutus-benefits-list text-lg max-w-prose">
          <li><strong>Cultural Events:</strong> Engage in a diverse range of events that celebrate our unique heritage, showcasing fascinating traditions and customs from our community.</li>
          <li><strong>Traditional Food:</strong> Savor the flavors of authentic cuisine, and taste the history and soul of our country with every bite.</li>
          <li><strong>Music and Dances:</strong> Immerse yourself in the enchanting rhythms and mesmerizing performances. Discover the stories and emotions expressed through the power of music and dance.</li>
          <li><strong>Scholarships:</strong> Unlock your potential with our scholarship program, supporting our members in their academic and personal growth. Join our family of ambitious individuals and make your dreams a reality.</li>
        </ul>
        <div className="actions">
            <Link to="https://ou.campuslabs.com/engage/organization/venezuelan-association" className="btn btn-outline text-lg">Apply Here</Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;