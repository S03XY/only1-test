"use client"

import { NewPostModal } from "@/components/common/newPostModal";
import { NewPostButton } from "@/components/home/newPostButton";
import { PostContainer } from "@/modules/home/postContainer";
import { useAppSelector } from "@/modules/redux/hooks";

const HomePage = () => {
  const postModalState = useAppSelector((state) => state.newPostModalReducer);

  return (
    <div className="w-full">
      <PostContainer />
      <NewPostButton />
      {postModalState.isOpen && (
        <div className="flex justify-center items-center fixed h-screen w-screen bg-black z-10 top-0 left-0">
          <NewPostModal />
        </div>
      )}
    </div>
  );
};
export default HomePage;
