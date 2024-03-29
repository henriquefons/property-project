import React from "react";
import Link from "next/link";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100 ",
  textColor = "text-gray-800",
  children,
  buttonInfo,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className={`mt-2 mb-4 ${textColor}`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
