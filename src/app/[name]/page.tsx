import {prisma} from "@/db";
import {capitalize} from "@/app/util";
import MoodMeter from "@/app/components/MoodMeter";
import React from "react";
import Image from "next/image";
import {redirect} from "next/navigation";

type Params = {
    params: {
        name: string
    }
}

async function updateSourness(id: string, value: number) {
    "use server"
    console.log("calling update mood")
    const updatedMood = await prisma.sourness.update({
        where: {id: id},
        data: {value: value}
    })

    console.log(updatedMood)
    // this does only work in production
    redirect(`/${updatedMood.name}`)
}


export default async function MoodPage({params: {name}}: Params) {

    const mood = await prisma.sourness.findUnique({
        where: {
            name: name
        }
    })

    let image = ""
    if (mood?.name === "nari" || mood?.name === "lisa") {
        image = "/peach.png"
    } else if (mood?.name === "jasper" || mood?.name === "fabiano") {
        image = "/mario.png"
    }

    return (
        <>
            <div className={"flex items-center justify-center flex-col py-2"}>
            <Image
                className={"-z-30 pt-4"}
                src={image}
                width={150}
                height={300}
                alt="Picture of the author"
                style={{animation: "float 2000ms linear infinite"}}
            />
            <h3 className={"text-5xl text-center p-12 drop-shadow-md"}>Wie ist <span
                className={"text-6xl text-rose-600"}>{capitalize(name)}</span> drauf? </h3>
            </div>

            {mood ? <MoodMeter moodId={mood.id} mood={mood.value} updateMood={updateSourness} name={name}
                               namePartner={mood.partner}/> :
                "no data found"}
        </>
    )
}