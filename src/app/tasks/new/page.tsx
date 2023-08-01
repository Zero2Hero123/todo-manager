

export default async function New(){

    return (
        <>
            <main className="grow flex flex-col  justify-center items-center" >
                <h1 className="text-3xl font-medium " >Create new Task</h1>

                <form action="" className="flex flex-col justify-center items-center h-[500px] w-[500px] bg-gray-200 drop-shadow-md">
                    <input placeholder="Task Name"  type="text" name="task" id="task_input" />
                    <input className="" type="submit" value="Add" />
                </form>

            </main>
        </>
    )
}