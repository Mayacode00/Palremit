import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Help and Support",
      links: [
        {
          name: "FAQ",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & condition",
        },
        {
          name: "AML & KYC Policy",
        },
      ],
    },
  ];
  const logos = [
    {
      imgUrl: "/assets/twitter.svg",
      alt: "twitter",
    },
    {
      imgUrl: "/assets/facebook.svg",
      alt: "facebook",
    },
    {
      imgUrl: "/assets/insta.svg",
      alt: "insta",
    },
    {
      imgUrl: "/assets/linkedin.svg",
      alt: "linkedin",
    },
  ];
  return (
    <div className="bg-green sm:px-[40px] px-[10px] py-[30px]">
      <div className=" flex sm:flex-row flex-col justify-between border-b-[1px] w-full pb-8 border-white sm:px-[40px] px-[10px]">
        <div>
          <img
            src={"/assets/footer-logo.svg"}
            alt="logo"
            className="lg:w-full w-[130px]"
          />
          <p className="sentence lg:my-6 my-2">
            Perform transactions, refer and earn
          </p>
          <div className="flex items-center my-3">
            <img
              src={"/assets/google-store.png"}
              className="w-[120px]"
              alt="google-store"
            />
            <div className="sm:m-2 m-1" />
            <img
              src={"/assets/apple-store.png"}
              className="w-[120px]"
              alt="apple-store"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="sm:ml-10 ml-0 sm:mt-0 mt-6">
              <h5 className="sentence font-bold text-yellow">
                {footerLink.title}
              </h5>
              {footerLink.links.map((link) => (
                <p key={link.name} className="text-white sentence">
                  {link.name}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex sm:flex-row flex-col text-yellow sm:justify-center justify-start sm:items-center items-start sm:py-16 py-8">
        <p className="sentence">© Palremit 2023 | All rights reserved</p>
        <div className="sm:mx-30 mx-0 sm:my-0 my-3" />
        <div className="flex items-center">
          <p className="sentence text-[24px]">Follow Us</p>
          {logos.map((logo, index) => (
            <div className="flex" key={index}>
              <img src={logo.imgUrl} alt={logo.alt} className="mx-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
