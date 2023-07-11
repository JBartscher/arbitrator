import Image from 'next/image'
import {ArrowBack, Heart, Heartbeat} from "tabler-icons-react";
import {rem} from "@mantine/core";
import NavButton from "@/app/components/NavButton";
import React from "react";

type Params = {
    params: {
        name: string
    }
}

export default async function WhatWeHavePage({params: {name}}: Params) {
    return (
        <div className="container mx-auto">
            <NavButton className={"hover:bg-rose-600"} btnTxt={"Zurück"} to={`/${name}`} icon={<ArrowBack size="1rem"/>}/>
            <h1 className={"text-3xl p-4"}>Was wir aneinander  <span className={"text-4xl text-rose-600"}>Lieben</span></h1>
            <p className={"text-base py-2 px-8"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className={"flex justify-center py-2 px-16"}>
            <Image
                src="/placeholder-relationship.jpg"
                width={800}
                height={500}
                alt="Picture of the author"
                style={{left: "calc(50% - 400px)"}}
            />
            </div>
            <p className={"text-base py-2 px-8"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et

            </p>
            <p className={"text-base py-2 px-8"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </div>
    )
}