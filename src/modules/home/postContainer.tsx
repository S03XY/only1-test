"use client";

import { SinglePost } from "@/components/common/singlePost";
import { useState } from "react";
import { SinglePostInterface } from "@/interface/singlePostInterfaces";
import { NewPostButton } from "@/components/home/newPostButton";

export const PostContainer = () => {
  const [data, setData] = useState<SinglePostInterface[]>([
    {
      name: "beyondShahank",
      data: "In the quiet forest, the leaves rustled in the gentle breeze, and birds sang their melodious tunes. A lone hiker ventured deeper into the woods, searching for hidden treasures. As the sun dipped below the horizon, a sense of wonder and serenity enveloped the wilderness, making it a truly magical place.",
      date: new Date(),
    },
    {
      name: "beyondShahank",
      data: "hey there i am using this post",
      date: new Date(),
    },
    {
      name: "beyondShahank",
      data: "hey there i am using this post",
      date: new Date(),
    },
    {
      name: "beyondShahank",
      data: "hey there i am using this post",
      date: new Date(),
    },
    {
      name: "beyondShahank",
      data: "hey there i am using this post",
      date: new Date(),
    },
    {
      name: "beyondShahank",
      data: "hey there i am using this post",
      date: new Date(),
    },
    {
      name: "beyondShahank",
      data: "hey there i am using this post",
      date: new Date(),
    },
  ]);

  return (
    <div className="w-full max-w-[50vw] mx-auto overflow-y-scroll space-y-4 relative">
      {data.map((d, i) => (
        <SinglePost postData={d} key={i} />
      ))}
s̄    </div>
  );
};
