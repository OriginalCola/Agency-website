export default function Services() {
    const cardStyle = "bg-[#131313] desktop:h-[15rem] tablet:h-[12rem] mobile:h-[10rem] flex flex-col justify-center items-center rounded-[1rem]";
    const imgStyle = "mb-5";
    const textStyle = ""
    const textContainer = "whitespace-pre-wrap overflow-auto w-3/5 text-center"
    return (
        <section
            id='services'
            className='pt-[5rem]'>
            <div className='grid desktop:grid-cols-4 gap-y-10 gap-x-5 desktop:mx-[10.625rem] desktop:mt-[8rem] tablet:mt-[4rem] mobile:mt-[1.5rem] mobile:grid-cols-2 mobile:mx-[2rem] tablet:mx-[5rem]'>
                <div className={cardStyle}>
                    <img className={imgStyle} src="/icona1.png"></img>
                        <div className={textContainer}>
                            <h1 className={textStyle}>Analiza rynku i doposawanie panującym trendom</h1>
                        </div>
                    </div>
                <div className={cardStyle}>
                    <img className={imgStyle} src="/icon2.png"></img>
                        <div className={textContainer}>
                            <h1 className={textStyle}>Tworzenie stron oraz aplikacji</h1>
                        </div>
                    </div>
                <div className='col-span-2 desktop:h-[15rem] tablet:h-[12rem] mobile:h-[10rem] flex justify-center flex-col desktop:ml-[2rem] tablet:order-first mobile:order-first'>
                    <h1 className='text-[#FFF] desktop:text-[2.5rem] tablet:text-[2rem] mobile:text-[1.7rem] font-[500] pb-[1rem]'>Nasze metody zwiększania lukratywności</h1>
                    <h3 className='text-[#C9C9C9] desktop:text-[1.125rem] tablet:text-[1rem] mobile:text-[0.85rem] font-[400]'>Narzędzia które wykorzystują nasi eskperci w celu zwiększenia przychodowości oraz zainteresowania twojej działalnosci</h3>
                </div>
            </div>
            <div className='grid desktop:grid-cols-4 gap-y-10 gap-x-5 desktop:mx-[10.625rem] mt-[2rem] tablet:grid-cols-2 mobile:grid-cols-2 tablet:mx-[5rem] mobile:mx-[2rem] '>
                <div className={cardStyle}>
                    <img className={imgStyle} src="/icon3.png"></img>
                    <div className={textContainer}>
                        <h1 className={textStyle}>Zwiększanie zainteresowania sztuką pisaną</h1>
                    </div>
                </div>
                <div className={cardStyle}><img className={imgStyle} src="/icon4.png"></img><div className={textContainer}><h1 className={textStyle}>Treści umieszczane na platformach social media</h1></div></div>
                <div className={cardStyle}><img className={imgStyle} src="/icon5.png"></img><div className={textContainer}><h1 className={textStyle}>Chwylity marketing w social media </h1></div></div>
                <div className={cardStyle}><img className={imgStyle} src="/icon6.png"></img><div className={textContainer}><h1 className={textStyle}>Zwiększenie klikalności w Google</h1></div></div>
            </div>
        </section>
    );
}
