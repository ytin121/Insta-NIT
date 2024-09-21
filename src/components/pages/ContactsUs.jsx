// import * as React from "react";

// const ContactsUs = () => {
//     return (
//         <div id="contact">
//             <div className="bg-navy-blue p-8">
//                 <div className="mt-10 text-4xl font-extrabold text-cyan-400 text-center">
//                     Contact Me!
//                 </div>
//                 <div className="flex flex-col gap-5 mt-10 max-w-full">
//                     <div className="flex flex-row gap-5 mt-10 max-w-full">
//                         <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 className="input-field outline-none bg-zinc-700  "
//                             />
//                         </div>
//                         <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 className="input-field outline-none bg-zinc-700  "
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-row gap-5 mt-5 max-w-full">
//                         <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
//                             <input
//                                 type="number"
//                                 placeholder="Mob. Number"
//                                 className="input-field outline-none bg-zinc-700  "
//                             />
//                         </div>
//                         <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 className="input-field outline-none bg-zinc-700  "
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="  px-8 pt-4 pb-8 mt-7 max-w-full  text-2xl font-semibold whitespace-nowrap rounded-xl text-stone-400 items-center">
//                     <textarea
//                         name="yourMessage"
//                         id="yourMessage"
//                         cols="68"
//                         rows="3"
//                         placeholder="Your Message"
//                         className="input-field outline-none bg-zinc-700  px-8 pt-8 pb-8 mt-7 rounded-xl"
//                     ></textarea>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactsUs;

import * as React from "react";

const ContactsUs = () => {
    return (
        <div id="contact" className="px-4 py-12 sm:px-6 lg:px-8 bg-navy-blue">
            <div className="max-w-4xl mx-auto">
                <div className="text-4xl font-extrabold text-cyan-400 text-center">
                    Contact Me!
                </div>

                {/* Contact Form */}
                <div className="flex flex-col gap-5 mt-10">
                    {/* First and Last Name */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow px-6 py-4 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full bg-zinc-700 outline-none text-white"
                            />
                        </div>
                        <div className="flex-grow px-6 py-4 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full bg-zinc-700 outline-none text-white"
                            />
                        </div>
                    </div>

                    {/* Mobile Number and Email */}
                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="flex-grow px-6 py-4 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="number"
                                placeholder="Mobile Number"
                                className="w-full bg-zinc-700 outline-none text-white"
                            />
                        </div>
                        <div className="flex-grow px-6 py-4 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-zinc-700 outline-none text-white"
                            />
                        </div>
                    </div>

                    {/* Message Box */}
                    <div className="px-6 py-4 rounded-xl bg-zinc-700 text-2xl">
                        <textarea
                            name="yourMessage"
                            id="yourMessage"
                            placeholder="Your Message"
                            rows="4"
                            className="w-full bg-zinc-700 outline-none text-white resize-none"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsUs;

