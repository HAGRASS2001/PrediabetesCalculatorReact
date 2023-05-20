const CardActions = (props) => {
    return (
        <div className="flex gap-4 flex-row w-full">
            {props.children}
        </div>
    );
}

export default CardActions;