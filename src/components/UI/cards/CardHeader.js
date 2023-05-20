const CardHeader = (props) => {
    return (
        <div className="flex items-center w-full">
            {props.children}
        </div>
    );
}

export default CardHeader;