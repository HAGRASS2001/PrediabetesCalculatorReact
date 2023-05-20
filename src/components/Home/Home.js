const Home = (props) => {
    return ( 
        <div className="w-1/2 text-justify">
            <p className=" text-center italic text-md font-medium"><span>Welcome, </span>{props.admin.name}</p>
            <br/>
            {props.admin.role === "Super Admin" && <p>Welcome to our website! As a Super Admin, you hold the highest level of authority and have unrestricted access to all features and functionalities. With your elevated privileges, you can effortlessly manage and oversee every aspect of our website. From user management to content creation, customization, and system configuration, you have the power to make crucial decisions and execute them with precision. Whether it's controlling user permissions, analyzing data, or implementing updates, your capabilities ensure smooth operations and maintain the integrity of our platform. As a Super Admin, you are an invaluable asset to our website, enabling seamless navigation, optimum security, and a superior user experience. <span className=" font-bold">Use navigation bar to swith between your functionality.</span></p>}
            {props.admin.role === "Admin" && <p>We appreciate your role as an Admin on our website. As an Admin, you play a vital role in managing user complaints and overseeing our team of doctors. Your responsibilities encompass resolving user concerns promptly and efficiently, ensuring that our users receive the support they need. You act as a bridge between our valued users and our dedicated team of doctors, facilitating effective communication and addressing any issues that arise. Additionally, you have the authority to handle administrative tasks related to doctor management, such as onboarding new doctors, monitoring their performance, and ensuring compliance with our guidelines and standards. Your meticulous attention to detail and empathetic approach contribute to a positive user experience and maintain the professionalism of our platform. We greatly value your contributions as an Admin, as you help create a supportive and trustworthy environment for both our users and our esteemed medical professionals. <span className=" font-bold">Use navigation bar to swith between your functionality.</span></p>}

        </div>
     );
}
 
export default Home;