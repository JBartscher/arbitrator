import {prisma} from "../src/db";

async function main() {
    const response = await Promise.all([
        prisma.sourness.upsert({
            where: {name: 'nari'},
            update: {},
            create: {
                name: 'nari',
                value: 100,
                partner: 'jasper'
            },
        }),
        prisma.sourness.upsert({
            where: {name: 'lisa'},
            update: {},
            create: {
                name: 'lisa',
                value: 100,
                partner: 'fabiano'
            },
        }),
        prisma.sourness.upsert({
            where: {name: 'jasper'},
            update: {},
            create: {
                name: 'jasper',
                value: 100,
                partner: 'nari'
            },
        }),
        prisma.sourness.upsert({
            where: {name: 'fabiano'},
            update: {},
            create: {
                name: 'fabiano',
                value: 100,
                partner: 'lisa'
            },
        }),
    ])
    console.log(response)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })