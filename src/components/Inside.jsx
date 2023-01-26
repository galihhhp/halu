const Inside = () => (
  <>
    <div class="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">Inside ICC 2022</h1>
      <h2>Exciting activities designed for you</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 px-6 md:px-16 lg:px-28 xl:px-60 w-full gap-4">
      {[
        'Cosplay Competition',
        'Vtuber Talkshow & Concert',
        'Movie Panel',
        'Comic Bidding',
        'Main Guest Talkshow',
        'Comic Artist Interactive Show',
        'Gaming Competition',
        'Stamp Rally',
        'DJ Night',
      ].map((item, i) => {
        return (
          <div className="h-[300px] md:h-[350px] w-full rounded-md bg-neutral-500 transition-transform duration-500 hover:scale-105 flex items-end justify-center pb-4 text-center text-2xl font-bold bg-[url(https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">
            {item}
          </div>
        );
      })}
    </div>
  </>
);

export default Inside;
