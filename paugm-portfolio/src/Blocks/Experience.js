import { useNavigate } from "react-router-dom";

export default function Experience() {
    const navigate = useNavigate();
    return (
        <div className="experience">
            <h1>WORK EXPERIENCE</h1>
            <div className="experience-section">
                <div className="experience-title-company">
                    <div>
                        <h4>Digital Marketing Specialist</h4>
                        <p><i>January 2024 - Present</i></p>
                    </div>
                    <h5>Rentals United</h5>
                </div>
                <ul>
                    <li>Created multiple landing pages using HubSpot and programming knowledge of HTML, CSS and JavaScript, as well as improving
                        the user experience UX and user interface UI design on our website.</li>
                    <li>Improved lead generation and traffic for customer websites and social media accounts
                        by 25% by aligning marketing initiatives and brand voice across all channels.</li>
                    <li>Participated on daily meetings to work closely with the sales department to improve our
                        conversions from Leads to Marketing Qualified Leads.</li>
                    <li>Managed and created CRM campaigns, automating emails and workflows.</li>
                </ul>
                <div className="experience-elements">
                    <a href="#" alt="#" onClick={() => navigate('projects-ru')}><button>Projects</button></a>
                    <div className="experience-tags">
                        <p>HubSpot</p>
                        <p>Wordpress</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Notion</p>
                        <p>Figma</p>
                        <p>Google Analytics</p>
                        <p>Microsoft Excel</p>
                    </div>
                </div>
            </div>
            <div className="experience-section">
                <div className="experience-title-company">
                    <div>
                        <h4>Digital Marketing Specialist</h4>
                        <p><i>January 2021 - January 2024</i></p>
                    </div>
                    <h5>Artfishing.SL</h5>
                </div>
                <ul>
                    <li>Automated and created more than 100 email marketing campaigns to introduce new products of the Yuki and
                        Fishus brands for clients from all over Europe resulting in a 16% boost in brand awareness.</li>
                    <li>Managed relationships with international sales representatives, retailers and customers.</li>
                    <li>Developed Social Media strategies managing Yuki & Fishus brands, creating engaging content
                        automating and scheduling posts, resulting in a 250% increase over the past 3 years.</li>
                    <li>Managed a 50000€ budget for sponsorships, World Champions, and influencers, in coordination
                        with the accounting department, invoicing department, and export department.</li>
                    <li>Provided graphic content having provided +1000 professional photos, improving Photoshop,
                        Lightroom knowledge, and photography skills to develop the Yuki and Fishus Catalogues every year.</li>
                    <li>Wrote +500 product descriptions on the yukicompetition website, applying SEO, improving copyrighting
                        skills, programming with HTML & CSS in most cases, and using  Google Analytics to analyze our audience.</li>
                    <li>Worked with B2B Software categorizing and organizing products in our e-commerce, as well as solving technical issues.</li>
                </ul>
                <div className="experience-elements">
                <a href="#" alt="#" onClick={() => navigate('projects-art')}><button>Projects</button></a>
                    <div className="experience-tags">
                        <p>Mailchimp</p>
                        <p>Microsoft Excel</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Adobe Photoshop</p>
                        <p>Adobe Lightroom</p>
                        <p>Google Analytics</p>
                    </div>
                </div>
            </div>
            <div className="experience-section">
                <div className="experience-title-company">
                    <h4>Events Coordinator</h4>
                    <h5>Verbeke Foundation</h5>
                </div>
                <ul>
                    <li>Assistant event coordinator and staff member organizing special events such as weddings, interviews, art
                        exhibitions and business meetings, along with other co-workers and volunteers from around the world at a Belgian museum of contemporary art.</li>
                    <li>Also took the role as a bartender and customer support, as well as helping with logistic tasks or guiding customers to many activities.</li>
                </ul>
            </div>
        </div>
    )
}