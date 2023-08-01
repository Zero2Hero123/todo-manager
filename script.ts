const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

async function main(){

    const newTask = await prisma.todoItem.create({
        data: {
            task: "do dishes"
        }
    })

    console.log(newTask)

}

main()
    .catch(e => {
        console.error(e)
    }).finally(async () => {
        await prisma.$disconnect()
    })