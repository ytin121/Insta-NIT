import * as React from "react";

const ContactsUs = () => {
    return (
        <div id="contact">
            <div className="bg-navy-blue p-8">
                <div className="mt-10 text-4xl font-extrabold text-cyan-400 text-center">
                    Contact Me!
                </div>
                <div className="flex flex-col gap-5 mt-10 max-w-full">
                    <div className="flex flex-row gap-5 mt-10 max-w-full">
                        <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input-field outline-none bg-zinc-700  "
                            />
                        </div>
                        <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input-field outline-none bg-zinc-700  "
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 mt-5 max-w-full">
                        <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="number"
                                placeholder="Mob. Number"
                                className="input-field outline-none bg-zinc-700  "
                            />
                        </div>
                        <div className="flex-grow px-8 py-6 rounded-xl bg-zinc-700 text-2xl">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input-field outline-none bg-zinc-700  "
                            />
                        </div>
                    </div>
                </div>
                <div className="  px-8 pt-4 pb-8 mt-7 max-w-full  text-2xl font-semibold whitespace-nowrap rounded-xl text-stone-400 items-center">
                    <textarea
                        name="yourMessage"
                        id="yourMessage"
                        cols="68"
                        rows="3"
                        placeholder="Your Message"
                        className="input-field outline-none bg-zinc-700  px-8 pt-8 pb-8 mt-7 rounded-xl"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default ContactsUs;
