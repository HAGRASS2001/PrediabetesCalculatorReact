const CardBody = (props) => {
    return (
        <div className="grid grid-cols-2 gap-10 w-full">
            {props.children}
        </div>
    );
}

export default CardBody;