const CardBody = (props) => {
    return (
        <div className="grid grid-cols-2 gap-20">
            {props.children}
        </div>
    );
}

export default CardBody;