// https://flowrift.com/c/stats/N5Qif?view=preview

const Stats = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="mb-8 md:mb-12">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Our Team by the numbers
                    </h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is random or
                        otherwise generated.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
                        <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                            200
                        </div>
                        <div className="text-sm font-semibold sm:text-base">People</div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
                        <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                            500+
                        </div>
                        <div className="text-sm font-semibold sm:text-base">People</div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
                        <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                            1000+
                        </div>
                        <div className="text-sm font-semibold sm:text-base">Customers</div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
                        <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                            A couple
                        </div>
                        <div className="text-sm font-semibold sm:text-base">Coffee breaks</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
