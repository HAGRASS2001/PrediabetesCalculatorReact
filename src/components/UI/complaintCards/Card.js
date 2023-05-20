const Card = (props) => {
    return (
        <div className="flex flex-col gap-2 rounded-xl bg-cyan-100 w-[650px] overflow-hidden float-left p-4 shadow-lg justify-center items-center">
            {props.children}
        </div>
    );
}

export default Card;