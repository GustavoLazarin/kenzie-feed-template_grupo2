import { MdClose } from "react-icons/md";
import { NewPostForm } from "../../forms/NewPostForm";
import { useNewsContext } from "../../../providers/NewsContext";
import { useKeyDown } from "../../../hooks/useKeyDown";
import { useOutClick } from "../../../hooks/useOutClick";
import FocusTrap from "focus-trap-react";

export const NewPostModal = () => {
  const { setIsCreating } = useNewsContext();

  const ref = useOutClick(() => setIsCreating(false));
  useKeyDown("Escape", () => setIsCreating(false));

  return (
    <FocusTrap>
      <div ref={ref} className="dialog__overlay" role="dialog">
        <div className="dialog__container">
          <div className="container__top">
            <h2 className="post-title">Novo post</h2>
            <button className="bg-white" onClick={() => setIsCreating(false)}>
              <MdClose size={28} />
            </button>
          </div>
          <NewPostForm />
        </div>
      </div>
    </FocusTrap>
  );
};
