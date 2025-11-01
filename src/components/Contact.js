const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-4 p-4"> Contact us</h1>
      <div className="flex justify-between m-2">
        <input
          type="text"
          placeholder="name"
          className="border border-black rounded"
        />
        <input
          type="email"
          placeholder="email"
          className="border border-black rounded"
        />
        <button className="bg-grey border border-grey rounded-xl p-2 text-lg">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
