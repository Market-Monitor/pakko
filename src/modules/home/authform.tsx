const HomeAuthForm = () => {
  return (
    <div className="mt-8">
      <form>
        <div className="flex flex-col my-2">
          <label htmlFor="username" className="mb-1 text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="border py-3 px-6 text-gray-800 font-medium rounded-lg"
            placeholder="Your admin username"
          />
        </div>

        <div className="flex flex-col my-2">
          <label htmlFor="username" className="mb-1 text-gray-700 font-medium">
            Password
          </label>
          <input
            type="text"
            name="username"
            className="border py-3 px-6 text-gray-800 font-medium rounded-lg"
            placeholder="Your admin password"
          />
        </div>

        <div className="text-center mt-6">
          <button className="px-12 py-2 rounded-lg bg-indigo-400 hover:bg-indigo-500 text-white text-lg font-bold uppercase">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeAuthForm;
