'use client'
const EditKisting = ({ id }) => {
    const handleEdit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:8000/dashboard/my-listings/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({ 'name': 'shakib' }), 
            });

            const data = await response.json();

            if (data.success) {
                alert("Data Edit Safol hoyeche!");
                console.log(data.updatedUser);
            } else {
                alert("Kono somosha hoyeche.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            <button
                onClick={handleEdit}
                className="px-3 py-1.5 text-xs font-medium  hover:bg-amber-100 border border-amber-200 rounded-md transition-colors"
            >
                Edit
            </button>
        </div>
    );
};

export default EditKisting;