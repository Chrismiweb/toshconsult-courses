export default function BackendPric(){
    const list = [
        {
            head: "Course Price",
            rate: "₦150,000",
            // content: "Reach more than 3,000 students around the nigeria."
        },
        {
            head: "Students onboard",
            rate: "3000+",
            content: "Onboarded to our frontend development training."
        },
        {
            head: "Access to jobs opportunities",
            rate: "50%",
            content: "Our past students had been working in a top brands."
        },
    ]
    return(
        <div className="bg-[#F8E7F8] py-[80px] w-[100%] flex justify-center items-center">
            <div className="lg:w-[80%] gap-[20px] w-[90%] flex flex-col md:flex-row justify-between items-center">
                {list.map((l, index)=>(
                    <div className="bg-black gap-[20px] flex flex-col py-[20px] lg:py-[40px] px-[20px] lg:px-[40px] w-[80%] md:w-[30%] h-[300px] rounded-[20px]" key={index}>
                        <p className="text-white text-[13px]">{l.head}</p>
                        <p className="text-white text-[40px] font-bold">{l.rate}</p>
                        <p className="text-white mt-[30px]">{l.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}