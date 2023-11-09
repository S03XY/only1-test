import { CommonButton } from "../button";
import { useAppDispatch } from "@/modules/redux/hooks";
import { toggleNewPostModal } from "@/modules/redux/reducers/newPostModalReducer";
export const NewPostModal = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full max-w-[50vw] border-white/30 border-[1px] p-4 rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <h3>New Post</h3>
        <button
          className=""
          onClick={() => {
            dispatch(toggleNewPostModal({ isOpen: false }));
          }}
        >
          Close
        </button>
      </div>
      <textarea className="rounded-md bg-gray-900 p-2 outline-none w-full h-[30vh]" />
      <CommonButton title="Post" className="px-6" />
    </div>
  );
};
