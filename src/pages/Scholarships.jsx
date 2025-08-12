import { Link } from 'react-router-dom'
import data from './Gallery/JSON-Files/Scholarships.json';
const CDN = import.meta.env.VITE_CDN_BASE;
import GalleryCarousel from '../components/GalleryCarousel';

function Scholarships() {
    return (
        <div className="site-container">
            <section className="section stack-lg text-center align-center">
                <h1 className="heading-xl">Scholarships</h1>
            </section>

            {/* Section 1: left text, right image */}
            <section className="section">
                <div className="split">
                    <div className="stack-sm box-lined text-center">
                        <h2 className="heading-md" style={{ margin: '1rem 0rem 0rem' }}>VA Executive Members</h2>
                        <p className="text-md">
                        These scholarships are open to all Venezuelan Association executive members actively 
                        pursuing undergraduate or graduate degrees at the University of Oklahoma. Please note 
                        that exchange and CESL students are not eligible to apply. The awards are presented 
                        annually at the Venezuelan Night, coordinated by the OU Club of Venezuelan Alumni 
                        Association (VENOKAL) with support from the OU Alumni Office.
                        </p>
                    </div>
                    <div>
                        <GalleryCarousel
                            images={data.images.map(img => `${CDN}/${data.folder}${img}`)}
                            altPrefix="Scholarship Gallery"
                        />
                    </div>
                </div>
            </section>

            <section className="section stack-lg text-center align-center">
                <h1 className="heading-xl" style={{ margin: '3rem 0rem 0rem' }}>Ways to Donate</h1>
            </section>

            {/* Section 2: right image, left text */}
            <section className="section">
                <div className="split reverse">
                    <div>
                        <a href="https://www.facebook.com/groups/314536095607719/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${CDN}/${data.folder}venokal-logo.jpg`}
                                alt="OU Club of Venezuelan Alumni Association (VENOKAL) Logo"
                                className="img-responsive img-rounded img-shadow"
                            />
                        </a>
                    </div>
                    <div className="stack-sm box-lined align-center">
                        <h2 className="heading-md" style={{ margin: '1rem 0rem 0rem' }}>VENOKAL Fund</h2>
                        <p className="text-md text-center">
                        We are a collective of Venezuelan alumni from the University of Oklahoma, deeply appreciative 
                        of the educational opportunities provided by the university. Recognizing the challenges faced 
                        by Venezuelan students at OU, our mission is to support them through a Scholarship Fund 
                        dedicated to members of the Venezuelan Association. This fund reflects our gratitude for the 
                        education, experiences, and knowledge imparted by OU, aiming to give back to the university community.
                        </p>
                        <div className="actions">
                            <Link to="https://www.facebook.com/groups/314536095607719/" className="btn btn-outline text-lg">Join VENOKAL</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: stacked title, paragraph, button */}
            <section className="section stack-lg text-center align-center">
                <div className="stack-sm align-center" style={{ padding: '2rem' }}>
                    <div>
                        <a href="https://www.oufoundation.org/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`${CDN}/${data.folder}ou-foindation-logo.jpg`}
                                alt="OU Foundation Logo"
                                className="img-rounded "
                            />
                        </a>
                    </div>
                    
                    <p className="text-md max-w-prose">
                    Your support enables us to continue offering a range of cultural and educational events throughout 
                    the year. Consider donating today to help us keep our traditions alive and vibrant.
                    </p>
                    <div className="actions" style={{ paddingBottom: '2rem' }}>
                        <Link to="https://giving.oufoundation.org/OnlineGivingWeb/Giving/OnlineGiving/Venokal" className="btn btn-outline text-lg">Donate Here</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Scholarships