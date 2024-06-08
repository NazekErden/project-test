import React from "react";
import "./Modal.css";
const ModalSuccessfully = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-2xl mb-4">
            Приглашение отправлено на почту example1@gmail.com
          </h3>
          <div className="modal-action block">
            <form method="dialog">
              <button className="btn btn-green w-full mt-3">Закрыть</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default ModalSuccessfully;
