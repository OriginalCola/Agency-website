import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Choose() {
    return (
        <div className='bg-color-back mt-[15rem] flex desktop:justify-around items-center flex-row tablet:mx-[5rem] mobile:mx-[2rem]'>
            <div>
                <Image
                    className='mobile:hidden tablet:hidden'
                    src='/Section.png'
                    width={606}
                    height={622}
                    alt='HappyPerson'
                />
            </div>
            <div className='desktop:w-[30rem] tablet:w-[40rem]'>
                <h1 className='text-[#FFF] text-[2.75rem] font-[500]'>Why should you choose Zebra</h1>
                <h3 className='text-[#C9C9C9] text-[1.5rem] font-[400]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</h3>
                <Button className='mt-5 rounded-full bg-main text-[#fff] font-[500]'>Contact us</Button>
            </div>
        </div>
    );
}
