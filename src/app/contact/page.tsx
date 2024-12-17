import Link from 'next/link';
                import React from 'react';

const ContactPage = () => {
    return (
        <>
            <div>
            <img
                    src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nh4JQdvERQ38I6WypZXsFgUiWaNGiRZn6Sn06x6SHRo3XmygQO3AlUU2Brp0TOEQQGt9ZobU9HTreRoa4ZNdCLfYODBCjekr0qt2dt-n31EwatRVazWHD4Ak1nqQF~HxHeZFWOz0Nr9WZrYJIbE4Jn8EsDjv2lUZkyXtFQv6qmz7GBy9knwukx51Wbj-tNof4u6RnNIZJJUDYu~2Wh5RrtZfG~Xp-ixpeTmreas~yGkyHCQcA61FjdTGCjkPZ5TDoMg~FKxsMqYdF19stZKGCB~y0RJDTS2pta76JfPG-JMreFwl9zY-wDEq-KfsQoNAI62Ij45~2-FDRu1zKwQMOw__"
                    alt="contact"
                    className="
                    w-[1440]
                    h-[316]"
                ></img>
                  </div>
            <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
                    Get In Touch With Us
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
                <div className="flex flex-col gap-8 lg:w-1/2">
                    {[
                        {
                            img: "/images/location.svg",
                            title: "Address",
                            desc: "236 5th SE Avenue, New York NY10000, United States",
                        },
                        {
                            img: "/images/call.svg",
                            title: "Phone",
                            desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                        },
                        {
                            img: "/images/clock.svg",
                            title: "Working Time",
                            desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                            
                            <div>
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">{info.title}</h2>
                                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                                    {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:w-1/2 gap-6">
                    {[
                        { label: "Your Name", placeholder: "Enter your name" },
                        { label: "Email Address", placeholder: "Enter your email" },
                        { label: "Subject", placeholder: "Enter subject (optional)" },
                        { label: "Message", placeholder: "Enter your message" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                            />
                        </div>
                    ))}
                    <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold">
                        Submit
                    </button>
                </div>
                </div>
            {/* features */}
          <div>
    <div className="h-auto lg:h-[270px] bg-[#F9F1E7] mt-8 lg:mt-16 flex flex-col lg:flex-row items-center justify-evenly gap-6 lg:gap-0 px-4">
                <div
            className="flex flex-col lg:flex-row gap-3 lg:gap-4 max-w-[300px] md:max-w-[350px] lg:text-left"> 
                       
                        <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
                                High Quality
                            </h3>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
                            crafted from top materials
                            </p>

                            <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
                                Warranty Protection
                            </h3>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
                            over 2 years
                            </p>

                            <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
                                Free Shipping
                            </h3>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
                               order over 150 $
                            </p>

                            <h3 className="font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px]">
                            24/7 Support
                            </h3>
                            <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-600">
                               Dedicated support
                            </p>
                        
                    </div>
              
            </div>
            </div>
           
  {/* footer */}
  <div className="bg-[#FFFFFF] py-16 px-6 sm:px-12 md:px-16 lg:px-32 mt-44">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-[20px] sm:text-[24px] font-bold">Funiro.</h1>
            <p className="mt-4 text-[#9F9F9F] max-w-sm text-sm sm:text-base">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Links</h1>
            <Link href="/" className="text-[#333] text-sm sm:text-base">
              Home
            </Link>
            <Link href="/shop" className="text-[#333] text-sm sm:text-base">
              Shop
            </Link>
            <Link href="/blog" className="text-[#333] text-sm sm:text-base">
              Blog
            </Link>
            <Link href="/contact" className="text-[#333] text-sm sm:text-base">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Help</h1>
            <Link href="/payment-options" className="text-[#333] text-sm sm:text-base">
              Payment Options
            </Link>
            <Link href="/returns" className="text-[#333] text-sm sm:text-base">
              Returns
            </Link>
            <Link href="/privacy-policy" className="text-[#333] text-sm sm:text-base">
              Privacy Policies
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Newsletter</h1>
      
            <input
              type="email"
              className="border-b border-black text-sm text-center p-2 mt-2 w-full max-w-xs sm:max-w-sm"
              placeholder="  Enter Your Email Address"
            />
            <button className=" text-black p-2 mt-4 text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D9D9D9] pb-10 sm:pb-14 w-full ">
        <br />
        <span className="text-xs sm:text-sm">2023 Funiro. All rights reserved</span>
      </div> 
  

           
               
            </>
    );
};

export default ContactPage;