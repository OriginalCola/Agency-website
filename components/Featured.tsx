export default function Featured() {
    const itemStyle = "bg-[#181818] w-full mobile:h-[7rem] tablet:h-[8rem] desktop:h-[9rem] rounded-[10px] flex items-center justify-center";

    return (
        <div className='bg-color-back mt-[6.25rem] desktop:mx-[10.625rem] tablet:mx-[5rem] mobile:mx-[2rem]'>
            <div className='flex flex-wrap gap-4 items-center'>
                <h1 className='text-[#FFF] text-[18px] font-[400]'>Featured in</h1>
                <div className='w-[1px] bg-[#707070] h-[22px]'></div>
                <h1 className='text-[#C9C9C9] text-[18px] font-[400]'>Our Certification</h1>
            </div>

            <div className='grid desktop:grid-cols-5 gap-y-10 gap-x-5 mt-[2rem] tablet:grid-cols-4 mobile:grid-cols-2 '>
                <div className={itemStyle}></div>
                <div className={itemStyle}></div>
                <div className={itemStyle}></div>
                <div className={itemStyle}></div>
                <div className={itemStyle}></div>
            </div>
        </div>
    );
}
