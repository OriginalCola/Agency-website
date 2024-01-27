import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";
export default function Team() {
    const cardStyle = "bg-[#131313] desktop:h-[15rem] tablet:h-[12rem] mobile:h-[10rem] flex flex-col justify-center items-center rounded-[1rem]";
    const imgStyle = "mb-5";
    const textStyle = "text-transparent mt-2 tracking-wide leading-tight font-[500]  gradient-text animate-gradient"
    const textContainer = "whitespace-pre-wrap overflow-auto w-3/5 text-center"
    const teamMembers = [{name: 'Alababa', role: "CEO", picture: "/user.jpg"}, {name: 'Alababa', role: "CEO", picture: "/user.jpg"}, {name: 'Alababa', role: "CEO", picture: "/user.jpg"} , {name: 'Alababa', role: "CEO", picture: "/user.jpg"}];
    return (
        <section
            id='services'
            className='pt-[5rem]'>
                <div className='grid desktop:grid-cols-1 gap-y-10 gap-x-5 desktop:mx-[10.625rem] desktop:mt-[8rem] tablet:mt-[4rem] mobile:flex mobile:flex-col-reverse mobile:mx-[2rem] tablet:mx-[5rem]'>
                <h1 className='text-[#FFF] desktop:text-[2.5rem] tablet:text-[2rem] mobile:text-[1.7rem] font-[500] pb-[1rem]'>Nasz zespół</h1>
            </div>
            <div className='grid desktop:grid-cols-4 gap-y-10 gap-x-5 desktop:mx-[10.625rem] mt-[2rem] tablet:grid-cols-2 mobile:grid-cols-1 tablet:mx-[5rem] mobile:mx-[2rem] '>
            {teamMembers.map((item, index) => (
                <div className={cardStyle}>
                <Avatar src={item.picture} size="lg" />
                    <div className={textContainer}>
                        <h1 className={textStyle}>{item.name}</h1>
                        <h2>{item.role}</h2>
                    </div>
                
                </div>
                 ))}
                
               
            </div>
        </section>
    );
}
