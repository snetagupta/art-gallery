import { RiDownloadLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

const Profile = () => {
  return (
    <div className="py-12 px-12 flex gap-4">
      {/* left section */}
      <div className="w-[350px] h-screen shadow-md p-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            className="w-[200px] rounded-full"
            src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          />
          <div>
            <p>Anjum Shaikh</p>
            <p>Full stack Web Developer</p>
          </div>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            dolorum quibusdam impedit error sunt! Libero sint itaque
            exercitationem sequi molestiae illo ratione asperiores accusantium?
            Numquam exercitationem rerum facilis dolore iure!
          </p>
        </div>
        <div className="py-4">
          <p className="mb-2">Skills</p>
          <div>
            <ul className="flex items-center justify-between gap-2 flex-wrap ">
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                React
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                Javascript
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                Html
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                Css
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                NodeJs
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                ExpressJs
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                MongoDB
              </li>
              <li className="px-2 py-1 border border-b-neutral-100 rounded-md">
                SQL
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* rightt section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="shadow-md p-6">
          <p className="text-xl font-semibold mb-4">Basic Information</p>
          <div className="grid grid-cols-3 mb-4 gap-10">
            <div>
              <p>Age</p>
              <p>28 Years</p>
            </div>
            <div>
              <p>Years Of Experience</p>
              <p>6 Years</p>
            </div>
            <div>
              <p>Phone</p>
              <p>+91-8777325296</p>
            </div>
            <div>
              <p>CTC</p>
              <p>12 LPA</p>
            </div>
            <div>
              <p>Location</p>
              <p>Ahemdabad,Gujrat</p>
            </div>
            <div>
              <p>Email</p>
              <p>AnjumShaikg12@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-6 ">
            <div className="flex items-center justify-between gap-3 p-2 bg-blue-500 rounded-md text-white">
              <RiDownloadLine />
              <button>Download Resume</button>
            </div>
            <div className="flex items-center justify-between gap-3 p-2 text-blue-500 border border-blue-500 rounded-md">
              <MdOutlineMailOutline />
              <button>Send Email</button>
            </div>
          </div>
        </div>

        <div className="bg-slate-300 p-6 flex flex-col gap-4">
          <p className="text-xl font-semibold mb-4">Experience</p>
          <div className="flex items-center gap-8">
            <img
              className="w-[70px]"
              src="https://st.llnl.gov/sites/default/files/inline-images/ST_icon.png"
            />
            <div className=" border-b-2 w-full pb-4">
              <p>Infosys</p>
              <p>Full Stack Developer</p>
              <p>Apr 2018-Present | Pune,India</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <img
              className="w-[70px]"
              src="https://st.llnl.gov/sites/default/files/inline-images/ST_icon.png"
            />
            <div className=" border-b-2 w-full pb-4">
              <p>Infosys</p>
              <p>Full Stack Developer</p>
              <p>Apr 2018-Present | Pune,India</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <img
              className="w-[70px]"
              src="https://st.llnl.gov/sites/default/files/inline-images/ST_icon.png"
            />
            <div>
              <p>Infosys</p>
              <p>Full Stack Developer</p>
              <p>Apr 2018-Present | Pune,India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
