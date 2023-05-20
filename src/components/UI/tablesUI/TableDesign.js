const TableDesign = (props) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            {props.children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableDesign;