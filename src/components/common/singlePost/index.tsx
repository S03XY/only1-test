import { SinglePostInterface } from "@/interface/singlePostInterfaces";
import { formatDataTimeShort } from "@/utils/formatDateTime";
import Link from "next/link";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";

export const SinglePost = ({ postData }: { postData: SinglePostInterface }) => {
  return (
    <div className="p-4 border-[1px] rounded-lg border-white/[20%] space-y-4">
      <div className="flex justify-between items-center">
        <h4 aria-describedby="post creator">
          <Link href={"#"}>{`@${postData.name}`}</Link>
        </h4>
        <h6>{formatDataTimeShort(postData.date)}</h6>
      </div>

      <div className="flex justify-start items-center space-x-2">
        <FaWandMagicSparkles />
        <div className="bg-gray-800 rounded-lg p-2 w-full">{postData.data}</div>
      </div>

      <div className="flex justify-start items-center space-x-4">
        <div
          className="text-white text-lg"
          aria-describedby="like"
          role="button"
        >
          <AiFillHeart />
        </div>
        <div
          className="text-white text-lg"
          aria-describedby="comments"
          role="button"
        >
          <GoComment />
        </div>
      </div>
    </div>
  );
};
