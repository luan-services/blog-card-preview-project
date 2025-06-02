import React from 'react'
import { Link } from "react-router-dom";

const BlogPreviewCard = ({imgSrc, avatarImg, userName, date, desc, title, status}) => {
    return (
        <div className="bg-white p-5 max-w-80 max-h-160 border-t-2 border-l-2 shadow-[8px_8px_0px_1px_black] rounded-xl 
        hover:transition hover:duration-400 hover:scale-105 hover:shadow-[1px_1px_0px_1px_black]">
                {/* transition é usado para qualquer modificação da div, hover: define a modificação */}
            
            <Link to="/">
                {imgSrc && 
                    <div className="flex pb-3">
                        <img className="rounded-xl" src={imgSrc} alt="Card Image"></img>
                    </div>
                }
                <div className="flex pt-3">
                    <span className="bg-custom-primary text-gray-950 text-xs font-extrabold rounded-md p-2 pr-3 pl-3"> 
                    {status}
                    </span>
                </div>
                {date &&
                <div className="flex pt-3">
                    <h6 className="text-gray-500 text-xs font-extrabold"> 
                    Published {date}
                    </h6>
                </div>
                }
                {title &&
                    <div className="flex pt-3">
                        <span className="text-gray-950 text-xl font-black"> 
                        {title}
                        </span>
                    </div>
                }
                {desc && 
                <div className="flex pt-3">
                    <h4 className="text-gray-400 text-sm font-semibold pr-2"> 
                    {desc}
                    </h4>
                </div>
                }
                {avatarImg && userName &&
                    <div className="inline-block pt-5">
                        <img className="inline-block max-w-8" src={avatarImg} alt="Avatar"></img>
                        <h6 className="text-gray-950 text-sm font-extrabold inline-block align-middle pl-2"> 
                            {userName}
                        </h6>
                    </div>
                }
            </Link>
        </div>
    )
}

export default BlogPreviewCard
