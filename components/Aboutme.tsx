import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Us" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          We are Kipli Group, a collective of five passionate web developers with a mission to deliver quality digital solutions. With our combined expertise in front-end and back-end development, we create websites that are not only visually appealing, but also robust and functional.
        </p>
        <p>
          We offer:<br/ >
          ● Custom Website Development: Creating a website from scratch tailored to your unique vision and needs.<br />
          ● Responsive Design: Transforming your website's appearance seamlessly across all devices, from desktop to mobile.<br />
          ● Interactive Web Applications: Using modern technologies like React and Next.js to build dynamic user experiences.<br />
        </p>
        <p>
         We believe that collaboration is the key to success. We work closely with each client to ensure results that not only meet but exceed expectations. Let's build your digital presence with us!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
