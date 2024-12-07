// AccessDenied.jsx
const AccessDenied = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-10 text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
                <p className="text-gray-700 mb-6">
                    You must be logged in as an Admin to view this page.
                </p>
                <button
                    onClick={() => window.location.href = "/login"}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default AccessDenied;
