const Header = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-3 py-5 p-10 md:px-20 lg:h-[calc(100vh-102px)] mt-[102px] ">
            <div className="flex flex-col justify-center items-start">
                <div className="pr-10">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Why Us
                    </p>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold">{"Buy & recycling of Scrap"}</span>
                        <span className="font-normal text-sm">{"We Buy All Types Of Ferrous & Non Ferrous Metals Like Steel, Aluminum, Copper, Brass & Cable."}</span>
                        <span className="font-semibold">{"Competitive Price"}</span>
                        <span className="font-normal text-sm">{"We Buy All Types Of Ferrous & Non Ferrous Metals Like Steel, Aluminum, Copper, Brass & Cable."}</span>
                        <span className="font-semibold">{" Gas Cutters & Skilled Labors"}</span>
                        <span className="font-normal text-sm">{" We Have Certified Gas Cutters & Skilled Labors To Evaluate Your Metal Arisings And Provide A Waste Management Service To Meet Your Specific Requirements."}</span>
                        <span className="font-normal text-sm">{"We have well equipped facilities to process our quality products and our strong backward integration enables us to successfully control and streamline various operations involved. We have skilled and well knowledgeable team to handle each and every aspects of business in very effective manner."}</span>
                        <span className="font-semibold">{"Safety"}</span>
                        <span className="font-normal text-sm">{"We are committed to providing our customers with prompt, professional service in a safe, eco-friendly manner."}</span>
                    </div>
                </div>
            </div>
            <div className="flex lg:p-5 justify-center items-center">
                <img
                    className="h-96 w-full object-cover"
                    src="https://static.wixstatic.com/media/e2ee38_92d5f72666cc4e698e2e585c3ded91f0~mv2.jpeg/v1/fill/w_500,h_450,al_c,q_80,usm_0.66_1.00_0.01/e2ee38_92d5f72666cc4e698e2e585c3ded91f0~mv2.jpeg"
                    alt=""
                />
            </div>
        </div>
    );
}
export default Header