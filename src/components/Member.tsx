import React, {ReactNode} from "react"

interface MemberProps {
    children: ReactNode;
    image: string;
    insta: string;
  }

const Member: React.FC<MemberProps> = ({ children, image, insta }) => {
    return(
        <React.Fragment>
            <li className="min-[650px]:w-[50%] max-[650px]:grow pl-[20px] pr-[20px] mb-[40px] box-border">
                <div className="w-[100%] pt-[40px] px-[20px] relative box-border border-2 rounded-[5px] border-gray-666 transition-all duration-300 hover:border-yellow-300">
                    <div className="relative w-[100%] max-w-[240px] flex felx-row justify-center overflow-hidden z-[5px] box-border mx-auto">
                        <img className="w-[100%] h-[100%] object-cover rounded-[100%] min-h-[230px] overflow-clip" src={image} alt="" />
                    </div>
                    <div className="text-center pt-[22px] pb-[21px] px-[20px] relative z-5 box-border">
                        <h3 className="text-[18px] font-chakra m-0 p-0 text-white">
                            {children}
                        </h3>
                    </div>
                    <div className="px-[40px] py-0 border-b-[40px] border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-gray-252525">
                        <a href={insta} className="flex flex-row justify-center">
                            <svg className="w-[18px] h-[18px] absolute mt-[10px] text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </li>
        </React.Fragment>
    ) 
}
export default Member;