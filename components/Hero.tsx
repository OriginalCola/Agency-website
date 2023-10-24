import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id='about'>
            <div className='flex items-center flex-row justify-between'>
                <div className='flex flex-col mt-[5rem] mobile:mt-[10rem]'>
                    <div className='ml-[2rem] desktop:ml-[10.625rem] tablet:ml-[5rem] max-w-[35rem]'>
                        <h1 className='desktop:text-[3.75rem] tablet:text-[2.5rem] mobile:text-[2rem] tracking-wide leading-tight font-[500] pb-[0.5rem]'>Creative Digital Marketing Agency</h1>
                        <p className='text-gray-500 line-clamp-4 mr-[20px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                        <Button className='mt-5 rounded-full bg-main text-[#fff] font-[500]'>Contact us</Button>
                    </div>
                </div>
                <div className='flex flex-col mt-[5rem] desktop:mr-[18rem] mobile:hidden'>
                    {/* <Image
                        className='image'
                        src={'../public/Characterone.png'}
                        width={500}
                        height={500}
                        alt='HappyPerson'
                    />   */}
                </div>
            </div>
        </section>
    );
}
