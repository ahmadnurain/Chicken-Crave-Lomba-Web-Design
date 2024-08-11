import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { Icon } from "leaflet"; // Import Leaflet Icon
import "./style.css";

const ContactUs = () => {
  const [activeContent, setActiveContent] = useState("map");
  const [flipDirection, setFlipDirection] = useState("in");
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (flipDirection === "out") {
      // Hide content after flip-out animation
      const timer = setTimeout(() => setContentVisible(false), 600); // Matches the duration of flip-out animation
      return () => clearTimeout(timer);
    } else {
      // Show content after flip-in animation
      setContentVisible(true);
    }
  }, [flipDirection]);

  const handleContentChange = (content) => {
    setFlipDirection("out");
    // Change content after flip-out animation
    setTimeout(() => {
      setActiveContent(content);
      setFlipDirection("in");
    }, 600); // Matches the duration of flip-out animation
  };

  return (
    <div className="relative bg-[url('./assets/blob-scene-haikei.png')] bg-cover bg-no-repeat py-10 flex flex-col items-center">
      <div className="relative top-[-200px] sm:top-[-300px] flex flex-col w-full max-w-[1154px] px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 z-20 relative flex justify-center">Contact Us</h2>
        <div className="w-full flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden z-10 mb-10 md:mb-0">
          <div className="flex-1 bg-[#FF810E] text-white flex flex-col rounded-xl px-4 sm:px-6 py-6 sm:py-0 md:py-6 w-full md:w-[60%] overflow-hidden">
            {/* Tombol di bagian atas */}
            <div className="bg-[#FF810E] p-4 flex justify-center">
              <div className="flex border bg-white rounded-xl shadow-lg">
                <button onClick={() => handleContentChange("map")} className={`flex-1 px-4 py-2 rounded-xl ${activeContent === "map" ? "bg-gray-200 text-black" : "bg-white text-black"} focus:outline-none`}>
                  Map
                </button>
                <button onClick={() => handleContentChange("contact")} className={`flex-1 px-4 py-2 rounded-xl ${activeContent === "contact" ? "bg-gray-200 text-black" : "bg-white text-black"} focus:outline-none`}>
                  Contact Us
                </button>
              </div>
            </div>
            {/* Konten card dengan animasi flip */}
            <div className={`flex-1 transition-transform transform ${flipDirection === "in" ? "flip-in" : "flip-out"} bg-[#FF810E] text-white flex items-center justify-center p-6 h-auto max-h-[500px]`}>
              {contentVisible && (
                <>
                  {activeContent === "map" && (
                    <div className="w-full h-full">
                      <MapContainer center={[-6.8328649, 108.2147936]} className="rounded-xl" zoom={17} style={{ height: "400px", width: "100%" }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                        <Marker
                          position={[-6.8328649, 108.2147936]}
                          icon={
                            new Icon({
                              iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                              iconSize: [25, 41],
                            })
                          }
                        >
                          <Popup>Universitas Majalengka</Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                  )}
                  {activeContent === "contact" && (
                    <div className="mt-0 sm:mt-7 lg:-mt-1">
                      <h2 className="text-xl sm:text-2xl font-bold text-white">Hubungi Kami</h2>
                      <p className="text-white mb-4">Jika Anda ingin menghubungi kami secara langsung, silakan isi formulir di bawah ini dan kami akan segera merespon Anda:</p>

                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">Alamat</h3>
                          <p className="text-white">Ayam69</p>
                          <p className="text-white">Jl. Kuliner No. 69</p>
                          <p className="text-white">Jakarta, Indonesia 12345</p>
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">Telepon</h3>
                          <p className="text-white">(021) 1234-5678</p>
                          <h3 className="text-lg sm:text-xl font-bold text-white">Email</h3>
                          <p className="text-white">info@ayam69.com</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white">Media Sosial</h3>
                        <ul className="list-disc list-inside text-white">
                          <li>Facebook</li>
                          <li>Instagram</li>
                          <li>Twitter</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl pt-10 sm:pt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Formulir Kontak</h2>
            <p className="text-gray-600 mb-6">Jika Anda ingin menghubungi kami secara langsung, silakan isi formulir di bawah ini dan kami akan segera merespon Anda.</p>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " className="peer border-b-2 border-gray-300 py-7 pl-2 h-10 w-full text-gray-700 focus:border-b-[#FF810E] focus:outline-none" />
                  <label
                    htmlFor="name"
                    className="absolute top-0 left-2 text-gray-500 transition-transform transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-[#FF810E]"
                  >
                    Nama
                  </label>
                </div>
                <div className="relative">
                  <input type="text" id="phone" placeholder=" " className="peer border-b-2 border-gray-300 py-7 pl-2 h-10 w-full text-gray-700 focus:border-b-[#FF810E] focus:outline-none" />
                  <label
                    htmlFor="phone"
                    className="absolute top-0 left-2 text-gray-500 transition-transform transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-[#FF810E]"
                  >
                    No. Telpon
                  </label>
                </div>
              </div>
              <div className="relative my-10">
                <input type="email" id="email" placeholder=" " className="peer border-b-2 border-gray-300 py-7 pl-2 h-10 w-full text-gray-700 focus:border-b-[#FF810E] focus:outline-none" />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-2 text-gray-500 transition-transform transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-[#FF810E]"
                >
                  Email
                </label>
              </div>
              <div className="relative mb-4">
                <input type="text" id="pesan" placeholder=" " className="peer border-b-2 border-gray-300 py-7 pl-2 h-10 w-full text-gray-700 focus:border-b-[#FF810E] focus:outline-none" />
                <label
                  htmlFor="pesan"
                  className="absolute top-0 left-2 text-gray-500 transition-transform transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-[#FF810E]"
                >
                  Pesan
                </label>
              </div>

              <button type="submit" className="bg-[#FF810E] text-white text-xl font-semibold px-4 py-2 rounded-xl hover:shadow-[0_0_0_4px_#fed7aa] transition duration-500 w-full mt-10">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
