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
                <h1 className='text-[#FFF] text-[2.75rem] font-[500]'>Dlaczego my?</h1>
                <h3 className='text-[#C9C9C9] text-[1.5rem] font-[400]'>Wybierając naszą markę, otrzymujesz nie tylko produkt czy usługę, ale doświadczasz pełnego zaangażowania w jakość, innowację i satysfakcję klienta. Nasza firma nie tylko przewyższa oczekiwania, ale także buduje trwałe relacje oparte na zaufaniu, profesjonalizmie i nieustannym dążeniu do doskonałości. Razem z nami nie tylko nabywasz produkt a dołączasz do wspólnoty, która inspiruje i kreuje wyjątkowe doświadczenia.</h3>
                <Button className='mt-5 rounded-full bg-main text-[#fff] font-[500]'>Skontaktuj się</Button>
            </div>
        </div>
    );
}
