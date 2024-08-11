import registerImg from "./assets/register.png";
import backgroundImg from "./assets/blob-scene-haikei.png"; // Import your background image here

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="w-full max-sm:px-4 lg:px-40 flex justify-center items-center">
        <div className="border flex flex-col lg:flex-row w-full bg-white rounded-xl shadow-xl py-4 bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="hidden lg:block lg:w-1/2 p-10 lg:p-20">
            <img src={registerImg} alt="" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 px-4 m-auto">
            <div>
              <h1 className="text-center font-bold text-3xl mb-7">Register</h1>
              <form>
                <input type="text" placeholder="Nama Lengkap" className="border-b-2 w-full mt-5 text-xl py-1 px-2 bg-transparent focus:outline-none focus:border-orange-600" />
                <input type="email" placeholder="Email" className="border-b-2 w-full mt-10 text-xl py-1 px-2 bg-transparent focus:outline-none focus:border-orange-600" />
                <br />
                <input type="password" placeholder="Password" className="border-b-2 w-full mt-10 text-xl py-1 px-2 bg-transparent focus:outline-none focus:border-orange-600" />
                <input type="password" placeholder="Confirm Password" className="border-b-2 w-full mt-10 text-xl py-1 px-2 bg-transparent focus:outline-none focus:border-orange-600" />
                <button className="w-full py-2 px-3 bg-orange-600 font-semibold text-white rounded-xl mt-10 hover:bg-orange-700">Register</button>
              </form>
              <p className="text-center mt-3">
                Sudah memiliki akun? <span className="font-semibold text-orange-600 cursor-pointer">Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
