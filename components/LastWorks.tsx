import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Works() {
    return (
        <section
            id='lastest'
            className='mobile:flex justify-center pt-[10rem]'>
            <div className='desktop:ml-[10.625rem] tablet:ml-[5rem] mobile:ml-[1.5rem] z-50'>
                <h1 className='text-[#fff] text-[2rem] font-[400] mt-[2rem]'>Nowości</h1>

                <div className='flex flex-row flex-wrap gap-[5rem] mt-[2rem]'>
                    <div className='w-[23rem] tablet:h-[24rem] mobile:h-[23rem]'>
                        <Image
                            className='rounded-[10px]'
                            src='/Lastest1.png'
                            width={374}
                            height={250}
                            alt='Last work'
                        />
                        <h1 className='text-[1.5625rem] text-[#fff] font-[300] mt-[1.5rem]'>Touchflow - <span className="text-transparent gradient-fire-text animate-gradient">coś niespotykanego</span></h1>
                        <h3 className='text-[1.125rem] text-[#C9C9C9] font-[300] pb-[3rem]'>Niesamowity panel, który pomoże z codziennym zarządzaniem twoją stroną internetową.</h3>
                    </div>
                    <div className='w-[23rem] tablet:h-[24rem] mobile:h-[23rem]'>
                        <Image
                            className='rounded-[10px]'
                            src='/Lastest2.png'
                            width={374}
                            height={250}
                            alt='Last work'
                        />
                        <h1 className='text-[1.5625rem] text-[#fff] font-[300] mt-[1.5rem]'>Mayhem - Search engine Optimization</h1>
                        <h3 className='text-[1.125rem] text-[#C9C9C9] font-[300]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h3>
                    </div>
                    <div className='w-[23rem] tablet:h-[24rem] mobile:h-[23rem]'>
                        <Image
                            className='rounded-[10px]'
                            src='/Lastest3.png'
                            width={374}
                            height={250}
                            alt='Last work'
                        />
                        <h1 className='text-[1.5625rem] text-[#fff] font-[300] mt-[1.5rem]'>Trynityflow - <span className="text-transparent gradient-text animate-gradient">AI</span></h1>
                        <h3 className='text-[1.125rem] text-[#C9C9C9] font-[300]'>Wyczerpująca wypowiedź na temat sztucznej inteligencji i użycia jej w celu ułatwienia działania przedsiębiorcom.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
