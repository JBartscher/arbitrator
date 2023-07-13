import {prisma} from "@/db";
import Link from "next/link";
import {capitalize} from "@/app/util";
import React from "react";

export const fetchCache = 'force-no-store';
export default async function Index() {

    const moods = await prisma.sourness.findMany()


    return (
        <>
            <h1 className="text-6xl p-16 text-center">All <span
                className={"text-6xl text-rose-600"}>Mood</span> Items</h1>
            <div className={"grid grid-cols-2 gap-4 justify-center items-center"}>
                {moods.map(mood => <Link className={"text-center text-3xl"} key={mood.id}
                                         href={`/${mood.name}`}>{capitalize(mood.name)}</Link>)}
            </div>


        </>
    )
}
