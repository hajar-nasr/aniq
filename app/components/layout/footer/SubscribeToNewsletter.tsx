import { useRef } from "react";

const SubscribeToNewsletter = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed successfully");

    if (inputRef?.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="text-center lg:text-left">
        <p className="text-(--main-color) font-semibold text-lg">
          Join our newsletter
        </p>

        <p className="text-gray-500 text-base">
          We&#39;ll send you a nice letter per week. No spam.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-4 items-center mt-4 md:mt-0"
      >
        <input
          type="email"
          name="email"
          className="border border-gray-200 bg-gray-50 rounded-sm p-2 w-full max-w-80 md:min-w-75"
          placeholder="Enter your email"
          aria-label="Enter your email"
          ref={inputRef}
        />

        <button
          type="submit"
          className="rounded-sm hover:bg-blue-900 text-white test-medium py-2 px-4 bg-blue-800 cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeToNewsletter;
