export default function BackendSect2(){
    const sect =[
        {
            no: "400+",
            contend: "Interactive course",
        },
        {
            no: "10",
            contend: "Backend experts",
        },
        {
            no: "400+",
            contend: "Students studying backend",
        },
    ]
    return(
        <div className="w-[100%] bg-white py-[30px] flex justify-center items-center">
            <div className="md:w-[80%] w-[90%] gap-[20px] md:gap-0 flex flex-col md:flex-row justify-around items-center">
                {sect.map((r, index)=>(
                    <div key={index} className="md:w-[25%] w-[90%] gap-[10px] flex flex-col justify-center items-center bg-red-20 shadow-2xl h-[150px] rounded-[20px]">
                        <h1 className="font-bold text-[35px]">{r.no}</h1>
                        <p className="text-[13px] text-center text-[#000000B2] font-semibold">{r.contend}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}