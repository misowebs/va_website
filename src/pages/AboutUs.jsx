import './AboutUs.css';
import globalPics from './Gallery/JSON-Files/GlobalPics.json';
const CDN = import.meta.env.VITE_CDN_BASE;

const execNames = [
  { name: 'Maria Garcia', role: 'President', desc: 'From Maracaibo, Venezuela, Maria is a sophomore in Political Science.' },
  { name: 'Julie Torres', role: 'Vice President', desc: 'From Jalisco, Mexico, Princess is a junior in Business Administration.' },
  { name: 'Sofi Quintero', role: 'Treasurer', desc: 'From Jalisco, Mexico, Princess is a junior in Business Administration.' },
  { name: 'Nathalia Valdez', role: 'Secretary', desc: 'From Monagas, Venezuela, Nathalia is a freshman Pre-Nursing with a minor in Business.' },
  { name: 'Lucy Torres', role: 'Social Media Cahir', desc: 'From Caracas, Venezuela, Sofi is a junior in Psychology.' },
];

const execTeam = globalPics.executives.images.map((img, i) => ({
  img: `${CDN}/${globalPics.executives.folder}${img}`,
  ...execNames[i],
}));

const galleryImages = globalPics.gallery.images.map(img => `${CDN}/${globalPics.gallery.folder}${img}`);

function AboutUs() {
  return (
    <div className="aboutus-root">
      {/* Section 1: Title */}
      <section className="section text-center">
        <h1 className="heading-xl">Meet Our Executive Team</h1>
        <p className="text-lg max-w-prose" style={{ margin: '1.5rem auto 0' }}>
          For the {new Date().getFullYear()}-{new Date().getFullYear()+1} academic year.
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
      <section className="section text-center">
        <h2 className="heading-lg">Become an Executive Member</h2>
        <p className="text-md max-w-prose" style={{ margin: '1.5rem auto 2rem' }}>
        Join our executive team and play a pivotal role in shaping the future of the Venezuelan community. We’re 
        actively looking for individuals passionate about Venezuelan culture, with a talent for leadership and a 
        desire to make a difference. As an executive member, you’ll have the opportunity to lead projects, organize 
        events, and foster a vibrant culture. Contact us to learn how you can become a part of our dynamic team.
        </p>
      </section>

      {/* Section 4: Scrolling Gallery */}
      <section className="section text-center">
        <div className="aboutus-strip-gallery-wrapper">
          <div className="aboutus-strip-gallery">
            {galleryImages.concat(galleryImages).map((img, i) => (
              <img src={img} alt={`Gallery ${i+1}`} className="aboutus-strip-img" key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Get Involved */}
      <section className="section text-center">
        <h2 className="heading-lg">Get Involved</h2>
        <p className="text-md max-w-prose" style={{ margin: '1.5rem auto 2rem' }}>
          Become a member of our vibrant association and unlock a world of rich experiences!
        </p>
        <ul className="aboutus-benefits-list text-md max-w-prose" style={{ margin: '0 auto 2rem', textAlign: 'left', display: 'inline-block' }}>
          <li><strong>Cultural Events:</strong> Engage in a diverse range of events that celebrate our unique heritage, showcasing fascinating traditions and customs from our community.</li>
          <li><strong>Traditional Food:</strong> Savor the flavors of authentic cuisine, and taste the history and soul of our country with every bite.</li>
          <li><strong>Music and Dances:</strong> Immerse yourself in the enchanting rhythms and mesmerizing performances. Discover the stories and emotions expressed through the power of music and dance.</li>
          <li><strong>Scholarships:</strong> Unlock your potential with our scholarship program, supporting our members in their academic and personal growth. Join our family of ambitious individuals and make your dreams a reality.</li>
        </ul>
        <a href="https://ou.campuslabs.com/engage/organization/venezuelan-association" className="btn btn-outline">Apply Here</a>
      </section>
    </div>
  );
}

export default AboutUs;