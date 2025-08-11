import { Link } from 'react-router-dom'
const CDN = import.meta.env.VITE_CDN_BASE;

function Home() {
    return (
        <div className="site-container">
            {/* Section 1: stacked title, paragraph, button, image */}
            <section className="section stack-lg text-center align-center">
                <h1 className="heading-xl">A Piece of Venezuela in Oklahoma</h1>
                <p className="text-lg max-w-prose">
                    Engage with vibrant culture, community, and creativity. Join us to experience 
                    and contribute to our vibrant cultural community.
                </p>
                <div className="actions">
                    <Link to="/join-us" className="btn btn-primary">Join Us</Link>
                </div>
                <img
                    src={`${CDN}/VA Images/2023/10 Arepada/2023-arepada-11.jpeg`}
                    alt="Venezuelan Association Arepada"
                    className="img-responsive img-rounded img-shadow"
                    style={{ maxWidth: '1200px' }}
                />
            </section>

            {/* Section 2: left text, right image */}
            <section className="section">
                <div className="split">
                    <div className="stack-sm box-lined">
                        <h2 className="heading-lg text-center" style={{ paddingTop: '2rem' }}>Who We Are</h2>
                        <p className="text-md text-center" style={{ paddingBottom: '2rem' }}>
                        The Venezuelan Association at the University of Oklahoma is a passionate 
                        student organization dedicated to celebrating and sharing Venezuelan culture 
                        through music, dances, and traditions. Through engaging events and activities, 
                        we provide a platform for students and the community to explore Venezuela’s 
                        rich heritage, learn about our history, and connect with others.
                        </p>
                    </div>
                    <div>
                        <img
                            src={`${CDN}/VA Images/2018/11 Feria Gaitera/2018-feria-gaitera-2.1.jpg`}
                            alt="Noche de Gaita Event"
                            className="img-responsive img-rounded img-shadow"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: right image, left text */}
            <section className="section">
                <div className="split reverse">
                    <div>
                        <img
                            src={`${CDN}/VA Images/More Pics/First association meeting 2004.jpg`}
                            alt="Association Friends of Venezuela First Meeting"
                            className="img-responsive img-rounded img-shadow"
                        />
                    </div>
                    <div className="stack-sm box-lined">
                        <h2 className="heading-lg text-center" style={{ paddingTop: '2.5rem' }}>Our Mission</h2>
                        <p className="text-md text-center" style={{ paddingBottom: '2.5rem' }}>
                        We aim to foster a vibrant community of cultural exchange that promotes creativity 
                        and collaborative experiences. Our events serve as a bridge, connecting diverse 
                        groups through the joyous celebration of Venezuelan traditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: stacked title, paragraph, button */}
            <section className="section stack-lg text-center align-center">
                <div className="stack-sm box-lined align-center" style={{ padding: '3rem' }}>
                    <h2 className="heading-lg" style={{ paddingTop: '2rem' }}>Join Our Familia</h2>
                    <p className="text-md max-w-prose">
                    Become a part of the Venezuelan Association today and gain access to a network of students 
                    and community members who share your interest in cultural exploration and community engagement.
                    </p>
                    <div className="actions" style={{ paddingBottom: '2rem' }}>
                        <Link to="/about-us" className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home