import {prisma} from "@/db";
import {capitalize} from "@/app/util";
import MoodMeter from "@/app/components/MoodMeter";
import {Alert} from "@mantine/core";
import React from "react";
import moodMeter from "@/app/components/MoodMeter";

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
}


export default async function SournessPage({params: {name}}: Params) {

    const sourness = await prisma.sourness.findUnique({
        where: {
            name: name
        }
    })


    // const _1 = await prisma.sourness.create({data: {name: "jasper", value: 50}})
    // const _2 = await prisma.sourness.create({data: {name: "nari", value: 75}})
    // const _3 = await prisma.sourness.create({data: {name: "lisa", value: 25}})


    return (
        <>
            <h3 className={"text-5xl text-center p-12"}>Wie ist {capitalize(name)} drauf? </h3>
            {sourness ? <MoodMeter moodId={sourness.id} mood={sourness.value} updateMood={updateSourness}/> :
                "no data found"}
        </>
    )
}