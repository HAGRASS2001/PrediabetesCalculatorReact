const BodyTdDesign = (props) => {
    return (
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
            {props.children}
        </td>
    );
}

export default BodyTdDesign;