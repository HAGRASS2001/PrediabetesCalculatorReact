const Card = (props) => {
    return (
        <div className="flex flex-col gap-2 rounded-xl bg-cyan-100 w-[550px] overflow-hidden float-left p-4 shadow-lg">
            {props.children}
        </div>
    );
}

export default Card;