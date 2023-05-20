const HeaderDesign = (props) => {
    return (
        <thead className="bg-cyan-800">
            <tr>
                {props.children}
            </tr>
        </thead>
    );
}

export default HeaderDesign;