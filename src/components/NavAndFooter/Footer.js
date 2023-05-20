import Logo from "../../assets/Logo.png";

const Footer = () => {
    return ( 
        <footer className="text-center lg:text-left w-full bg-gray-100">
            <div className="container p-6 text-gray-800">
                <div className="grid grid-cols-3 gap-8">
                    <div>
                    <img src={Logo} width="400" alt="Description of the image" />
                    </div>
                    <div className="mb-4 md:mb-0 mt-4">
                        <h5 className="font-medium mb-2 uppercase">Our Mission</h5>
                        <p className="mb-4 text-md text-justify">
                            Our mission is to empower individuals to take control of their health by providing innovative and personalized solutions that help prevent and manage chronic conditions, such as diabetes. We aim to make it easier for people to make healthy choices, access reliable health information, and connect with healthcare professionals when needed.
                        </p>
                    </div>
            
                    <div className="mb-4 md:mb-0 mt-4">
                        <h5 className="font-medium mb-2 uppercase">Our Vision</h5>
                        <p className="mb-4 text-md text-justify">
                            Our vision is to create a world where chronic conditions are a thing of the past. We envision a future where individuals have the tools and resources they need to maintain optimal health and well-being, and where healthcare is proactive, rather than reactive. By harnessing the power of technology and data, we believe that we can make a meaningful impact on the lives of millions of people around the world, improving health outcomes and reducing healthcare costs.
                        </p>
                    </div>
                </div>
            </div>
        
            <div>
                <p className="text-center text-black p-4">© 2023 Copyright:<a className="text-black" href="https://tailwind-elements.com/">  SugarSmart</a>
                <p><a className="text-black" href="/TermsofService">  Terms of Service</a> || <a className="text-black" href="/PrivacyPolicy">  Privacy Policy</a> || <a className="text-black" href="mailto:sugarsmart.sspc@gmail.com">  Contact Us</a></p>
                </p>
            </div>
        </footer>
    );
}
 
export default Footer;