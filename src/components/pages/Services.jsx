import * as React from "react";
import service from "./page2/Services/service";
const Services = () => {
  return (<div id="services">
    <div>
      <div className="mt-2 text-5xl  text-white whitespace-nowrap max-md:text-4xl mb-20">
        <span className="font-extrabold">Our</span>
        <span className="font-extrabold text-cyan-400"> Services</span>
      </div>
      <div className="self-stretch mt-16 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

          {
            service.map(service => (
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">

                <div className="flex flex-col grow justify-center text-3xl text-white max-md:mt-10">
                  <div className="flex flex-col px-16 py-9 rounded-3xl bg-zinc-700 max-md:px-5  hover:bg-zinc-600  ">

                    <img
                      loading="lazy"
                      src={service.src}
                      className="self-center aspect-[0.82] w-[55px]"
                    />
                    <div className="mt-6 font-extrabold whitespace-nowrap">
                      {service.name}
                    </div>
                    <div className="mt-6 text-2xl font-medium">
                      {service.details}
                    </div>
                    <div className="self-center mt-8 font-semibold whitespace-nowrap hover:text-indigo-400 cursor-pointer">
                      Read more
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services;
