import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Handle form data submission
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">Bangladeshi Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            {...register('phoneNumber', {
                                required: true,
                                pattern: /^(\+88)?01[0-9]{9}$/
                            })}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phoneNumber.type === 'required'
                                    ? 'Phone number is required'
                                    : 'Invalid phone number format'}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', {
                                required: true,
                                minLength: 6, // Minimum length requirement
                                maxLength: 20, // Maximum length requirement
                            })}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.type === 'required'
                                    ? 'Password is required'
                                    : 'Password must be between 6 and 20 characters'}
                            </p>
                        )}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
