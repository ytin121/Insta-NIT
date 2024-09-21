// import * as React from "react";
// import service from "./page2/Services/service";
// const Services = () => {
//   return (<div id="services">
//     <div>
//       <div className="mt-2 text-5xl  text-white whitespace-nowrap max-md:text-4xl mb-20">
//         <span className="font-extrabold">Our</span>
//         <span className="font-extrabold text-cyan-400"> Services</span>
//       </div>
//       <div className="self-stretch mt-16 w-full max-md:pr-5 max-md:mt-10 max-md:max-w-full">
//         <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

//           {
//             service.map(service => (
//               <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">

//                 <div className="flex flex-col grow justify-center text-3xl text-white max-md:mt-10">
//                   <div className="flex flex-col px-16 py-9 rounded-3xl bg-zinc-700 max-md:px-5  hover:bg-zinc-600  ">

//                     <img
//                       loading="lazy"
//                       src={service.src}
//                       className="self-center aspect-[0.82] w-[55px]"
//                     />
//                     <div className="mt-6 font-extrabold whitespace-nowrap">
//                       {service.name}
//                     </div>
//                     <div className="mt-6 text-2xl font-medium">
//                       {service.details}
//                     </div>
//                     <div className="self-center mt-8 font-semibold whitespace-nowrap hover:text-indigo-400 cursor-pointer">
//                       Read more
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Services;
import * as React from "react";
import service from "./page2/Services/service";

const Services = () => {
  return (
    <div id="services" className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
      <div>
        <div className="mt-2 text-5xl text-white max-md:text-4xl mb-20 text-center">
          <span className="font-extrabold">Our</span>
          <span className="font-extrabold text-cyan-400"> Services</span>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.map((serviceItem, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="flex flex-col justify-center text-white bg-zinc-700 p-8 rounded-3xl hover:bg-zinc-600 transition duration-300 ease-in-out">
                  <img
                    loading="lazy"
                    src={serviceItem.src}
                    alt={serviceItem.name}
                    className="self-center w-16 h-16 mb-6"
                  />
                  <div className="text-xl font-extrabold mb-4 text-center">
                    {serviceItem.name}
                  </div>
                  <div className="text-lg font-medium text-center mb-6">
                    {serviceItem.details}
                  </div>
                  <div className="self-center font-semibold text-indigo-400 hover:text-indigo-500 cursor-pointer transition duration-300 ease-in-out">
                    Read more
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
