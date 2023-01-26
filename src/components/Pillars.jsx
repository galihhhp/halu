const Pillars = () => (
  <div className="flex flex-col justify-center items-center gap-10 py-20 h-auto bg-[#080E1C]">
    <div class="flex flex-col items-center">
      <h2>
        The <span class="font-bold">biggest event</span> in a year to celebrate
      </h2>
      <h1 className="text-4xl font-bold text-center">
        5 pop culture's pillars:
      </h1>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-1 px-6 md:px-16 lg:px-28 xl:px-60 w-full gap-4">
      {['Comics', 'Toys', 'Movies', 'Games', 'Lifestyle'].map((item, i) => {
        return (
          <div className="h-[300px] cursor-pointer md:h-[350px] w-full rounded-md bg-neutral-500 transition-transform duration-500 hover:scale-105 flex items-end justify-center pb-4 text-center text-2xl font-bold bg-[url(https://images.unsplash.com/photo-1612036781997-c3c7622682fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)]">
            {item}
          </div>
        );
      })}
    </div>
  </div>
);

export default Pillars;
