import React from 'react'

const ChangePassword = () => {
    return (<>
        
            <div className="text-white text-center font-semibold text-2xl py-2">
                <h1>Please change your password</h1>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-4">
                <form>
                    {/* Current Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="current-password"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Current Password
                        </label>
                        <input
                            type="password"
                            id="current-password"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter current password"
                        />
                    </div>

                    {/* New Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="new-password"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            id="new-password"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter new password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Re-enter new password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default ChangePassword
