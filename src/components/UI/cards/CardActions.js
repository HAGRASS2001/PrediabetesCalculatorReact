const CardActions = (props) => {
    return (
        <div className="flex gap-4 flex-row">
            {props.children}
        </div>
    );
}

export default CardActions;