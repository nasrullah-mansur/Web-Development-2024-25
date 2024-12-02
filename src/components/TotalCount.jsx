export default function TotalCount({ totalCount }) {
    return (
        <div className="max-w-[400px] mx-auto mb-3 border p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">
                Total Count: {totalCount}
            </h3>
        </div>
    );
}
