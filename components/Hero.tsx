import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
export default function Hero() {
    const router = useRouter()
    return (
        <section id='about'>
            <div className='flex items-center flex-row justify-between'>
                <div className='flex flex-col mt-[5rem] mobile:mt-[10rem]'>
                    <div className='ml-[2rem] desktop:ml-[10.625rem] tablet:ml-[5rem] max-w-[40rem]'>
                        <h1 className='text-transparent desktop:text-[4rem] tablet:text-[2.5rem] mobile:text-[2rem] tracking-wide leading-tight font-[500] pb-[0.5rem] gradient-text animate-gradient'><span>ROI</span> Agency</h1>
                        <p className='text-gray-500 text-[1.3rem] line-clamp-4 mr-[20px]'>Tworzymy unikalne kampanie, które nie tylko zwracają uwagę, ale również przenoszą marki do świata, gdzie kreatywność spotyka się z strategią, sprawiając, że każda historia staje się niezapomnianym doświadczeniem dla klientów.</p>
                        <Button onClick={() => router.push('mailto:trynityflow@gmail.com')} className='mt-5 rounded-full bg-main text-[#fff] font-[500]'>Skontaktuj się</Button>
                    </div>
                </div>
                <div className='flex flex-col mt-[5rem] desktop:mr-[18rem] mobile:hidden'>
                    <Image
                        className='image'
                        src='/Characterone.png'
                        width={500}
                        height={500}
                        alt='HappyPerson'
                    />
                </div>
            </div>
        </section>
    );
}
