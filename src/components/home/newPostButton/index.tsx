import { AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch } from "@/modules/redux/hooks";
import { toggleNewPostModal } from "@/modules/redux/reducers/newPostModalReducer";

export const NewPostButton = () => {
  const dispatch = useAppDispatch();

  const openNewPost = () => {
    dispatch(toggleNewPostModal({ isOpen: true }));
  };

  return (
    <div
      className="text-[30px] border rounded-full text-white  bg-black p-2 font-bold fixed bottom-5 right-5"
      role="button"
      aria-describedby="new post"
      onClick={openNewPost}
    >
      <AiOutlinePlus  />
    </div>
  );
};
