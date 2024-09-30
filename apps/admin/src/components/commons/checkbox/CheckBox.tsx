export function CheckBox() {
    return (
        <>
            <div className="flex items-center mb-4">
                <input
                    id="disabled-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-300 focus:ring-2 dark:bg-gray-200 dark:border-gray-300"
                />
                <label
                    htmlFor="disabled-checkbox"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                    Disabled checkbox
                </label>
            </div>
            <div className="flex items-center">
                <input
                    id="disabled-checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-300 focus:ring-2 dark:bg-gray-200 dark:border-gray-300"
                />
                <label
                    htmlFor="disabled-checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                    Disabled checked
                </label>
            </div>
        </>
    );
}
