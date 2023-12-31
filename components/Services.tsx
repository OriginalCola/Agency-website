export default function Services() {
    const cardStyle = "bg-[#131313] desktop:h-[15rem] tablet:h-[12rem] mobile:h-[10rem] flex justify-center items-center rounded-[1rem]";

    return (
        <section
            id='services'
            className='pt-[5rem]'>
            <div className='grid desktop:grid-cols-4 gap-y-10 gap-x-5 desktop:mx-[10.625rem] desktop:mt-[8rem] tablet:mt-[4rem] mobile:mt-[1.5rem] mobile:grid-cols-2 mobile:mx-[2rem] tablet:mx-[5rem]'>
                <div className={cardStyle}>01</div>
                <div className={cardStyle}>02</div>
                <div className='col-span-2 desktop:h-[15rem] tablet:h-[12rem] mobile:h-[10rem] flex justify-center flex-col desktop:ml-[2rem] tablet:order-first mobile:order-first'>
                    <h1 className='text-[#FFF] desktop:text-[2.5rem] tablet:text-[2rem] mobile:text-[1.7rem] font-[500] pb-[1rem]'>Our Digital Marketing Expertise</h1>
                    <h3 className='text-[#C9C9C9] desktop:text-[1.125rem] tablet:text-[1rem] mobile:text-[0.85rem] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit</h3>
                </div>
            </div>
            <div className='grid desktop:grid-cols-4 gap-y-10 gap-x-5 desktop:mx-[10.625rem] mt-[2rem] tablet:grid-cols-2 mobile:grid-cols-2 tablet:mx-[5rem] mobile:mx-[2rem] '>
                <div className={cardStyle}>04</div>
                <div className={cardStyle}>05</div>
                <div className={cardStyle}>06</div>
                <div className={cardStyle}>07</div>
            </div>
        </section>
    );
}
