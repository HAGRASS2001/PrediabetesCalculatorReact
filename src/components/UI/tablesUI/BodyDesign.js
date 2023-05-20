const BodyDesign = (props) => {
    return (
        <tbody className="divide-y divide-gray-200">
                {props.children}
        </tbody>
    );
}

export default BodyDesign;