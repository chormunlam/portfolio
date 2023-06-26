const Conatct = () => {
  return (
    <div id="contact" className="m-auto max-w-[1040px] p-4 py-16 md:pl-20">
      <h1 className="py-4 text-center text-4xl font-bold text-[#001b5e]">
        Contact
      </h1>
      <form
        action=""
        method="POST"
        encType="multipart/form-data"
        className="space-y-4"
      >
        <div className="grid w-full gap-4 py-2 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded border border-gray-300 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="rounded border border-gray-300 p-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded border border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="rounded border border-gray-300 p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2">
            Message
          </label>
          <textarea
            rows="10"
            id="message"
            name="message"
            className="rounded border border-gray-300 p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-[#001b5e] p-4 text-gray-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Conatct;
