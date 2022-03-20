/* eslint-disable @next/next/no-img-element */
export const NavBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white w-full z-40">
      <div className="flex flex-row justify-evenly items-center my-8 sm:my-5">
        <div>
          <img
            src="https://raw.githubusercontent.com/dennyrismanto/elemesid/main/public/images/image%2055.png"
            alt="picture"
          />
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-row">
            <div className="mr-4">
              <p className="font-medium">Home</p>
            </div>
            <div className="mr-4">
              <p className="font-medium">About</p>
            </div>
            <div className="mr-4">
              <p className="font-medium">Promotions</p>
            </div>
            <div className="mr-4">
              <p className="font-medium">Blog</p>
            </div>
            <div className="mr-4">
              <p className="font-medium">Contact Us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="mr-4 p-3 font-medium hidden sm:block">
            Masuk
          </button>
          <button className="mr-4 p-3 bg-green-line text-white rounded-full">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
