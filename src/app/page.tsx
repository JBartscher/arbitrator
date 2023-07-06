export default function Home() {

    const divStyle = {
        color: 'blue',
        width: '45%',
    };

    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center"}>
            <h1 className="magic">Hello</h1>
            <progress className={"w-4/5 col-span-2"} id="progress" max={100} value={55}/>
        </div>
    )
}
