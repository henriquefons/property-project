"use client";
import { useRouter, useParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div>
      <h1>Property {id}</h1>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
        Go Gome
      </button>
    </div>
  );
};

export default PropertyPage;
