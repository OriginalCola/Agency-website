import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
export default function Footer() {
    const router = useRouter()
    return (
        <section id='contact'>
            <div className='mt-[15rem] w-full h-[35rem] bottom-10 bg-[#131313] flex justify-between'>
                <div className='max-w-[45rem] desktop:mx-[10.625rem] tablet:mx-[7rem] mobile:mx-[2rem] '>
                    <div className='mt-[5rem]'>
                        <h1 className='text-[#fff] desktop:text-[3.75rem] tablet:text-[2.75rem] mobile:text-[2.2rem]'>Osiągnij <span className="text-transparent gradient-text animate-gradient">sukces</span></h1>
                        <h3 className='text-[#C9C9C9] desktop:text-[18px] tablet:text-[16px] mobile:text-[15px]'>TrynityFlow kładzie nacisk na zwiększenie rentownosci biznesu oraz zwrócenie kapitału wydanego na inwestycje poprzez innowacyjne strategie,konsekwenty zespół utalentowanych i zdyscyplinowacych jednostek zapewniając klientowi komfort współpracy i jej elastyczność.</h3>
                    </div>

                    <div className='mt-[2.5rem] flex items-center gap-[3rem]'>
                        <Button onClick={() => router.push('mailto:trynityflow@gmail.com')} className='rounded-full bg-main text-[#fff] font-[500]'>Skontaktuj się</Button>
                        <h1 className='mobile:hidden'>Or</h1>
                        <div className='mobile:hidden'>
                            <h1>trynityflow@gmail.com</h1>
                        </div>
                    </div>
                </div>

                <div className='mobile:hidden tablet:hidden'>
                    <Image
                        style={{ marginTop: 145, position: "absolute", right: "20rem" }}
                        src={'/FooterBackground.png'}
                        width={498}
                        height={367}
                        alt='HappyPerson'
                    />
                    <Image
                        style={{ marginTop: 159, position: "absolute", right: "20rem" }}
                        src='/FooterPerson.png'
                        width={395}
                        height={399}
                        alt='HappyPerson'
                    />
                </div>
            </div>
        </section>
    );
}
