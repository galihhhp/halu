const Footer = () => (
  <footer class="flex flex-col w-full items-center justify-between py-10 gap-4">
    <img
      className="lg:hidden block mb-10 w-72"
      src="https://subkultur.id/wp-content/uploads/2022/09/HEADER-BARU-11.png"
      alt=""
    />
    <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-2 lg:grid-rows-1 gap-4 w-full h-[600px] px-6 md:px-16 lg:px-28 xl:px-60">
      <img
        className="lg:block hidden"
        src="https://subkultur.id/wp-content/uploads/2022/09/HEADER-BARU-11.png"
        alt=""
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Discover</h1>
        <p>Guest Stars</p>
        <p>Exhibitors</p>
        <p>Get Your Ticket</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Resources</h1>
        <p>FAQ</p>
        <p>Event Guidelines</p>
        <p>Safety & Weapon Policy</p>
        <p>Anti-Harassment Policy</p>
        <p>Report an Incident</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">For Businesses</h1>
        <p>Become an Exhibitor</p>
        <p>Promote Your Brand</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Company</h1>
        <p>Contact</p>
        <p>Term of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
    <div class="flex justify-center gap-4">
      <img
        src="https://img.icons8.com/ios/100/FFFFFF/instagram-new--v1.png"
        className="w-8 h-8"
      />
      <img
        src="https://img.icons8.com/ios-glyphs/90/FFFFFF/facebook-f.png"
        className="w-8 h-8"
      />
      <img
        src="https://img.icons8.com/material-rounded/96/FFFFFF/twitter.png"
        className="w-8 h-8"
      />
      <img
        src="https://img.icons8.com/sf-black-filled/128/FFFFFF/youtube-play.png"
        className="w-8 h-8"
      />
    </div>
    <h1 className="text-center text-sm">
      2023 Indonesia Comic Con. All rights reserved.
    </h1>
  </footer>
);

export default Footer;
