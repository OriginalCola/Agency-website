import { Button } from "@nextui-org/react"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="flex justify-center items-center flex-row p-9">
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className="w-1/2">
                    <h1 className="text-5xl tracking-wide leading-tight">Creative Digital Marketing Agency</h1>
                    <p className="text-gray-500 line-clamp-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                    <Button className="mt-5">Contact us</Button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
                 <Image
                 src="/Characterone.png"
                 width={562}
                 height={652}
                 alt="HappyPerson"
                 />
            </div>
        </div>
    )
}