const Rundown = () => {
  const contents = [
    'Main Stage Rundown - Day 1',
    'Main Stage Rundown - Day 2',
    'Sandbox Rundown - Day 1',
    'Sandbox Rundown - Day 2',
    'Workshop Rundown - Day 1 & 2',
    'Portofolio Review Rundown - Day 1',
    'Portofolio Review Rundown - Day 1',
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#080E1C] gap-16 py-10">
      <h1 className="text-4xl font-bold">Rundown</h1>
      <div className="grid-flow-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-12 md:px-16 lg:px-28 xl:px-60 w-full gap-6">
        {contents.map((item, i) => {
          return (
            <div className="h-[600px] md:h-[400px] w-full rounded-md flex flex-col justify-center gap-4 mt-16">
              <h1 className="text-center text-xl font-bold">{item}</h1>
              <img
                src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="h-full rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rundown;
