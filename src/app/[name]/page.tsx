import {prisma} from "@/db";

type Params = {
    params: {
        name: String
    }
}

export default async function SournessPage({params: {name}}: Params) {

    const sourness = await prisma.Sourness.findFirst({
        where: {
            name: {
                equals: name,
                // mode: 'insensitive', // Default value: default
            },
        }
    })

    // const _1 = await prisma.Sourness.create({data: {name: "Lisa", value: 25}})
    // const _2 = await prisma.Sourness.create({data: {name: "Nari", value: 75}})
    // console.log(_1)
    // console.log(_2)


    return (
        <>
            <h3 className={"text-2xl"}>Ist {name} noch sauer? </h3>
            {sourness ? sourness : "null"}
        </>
    )
}