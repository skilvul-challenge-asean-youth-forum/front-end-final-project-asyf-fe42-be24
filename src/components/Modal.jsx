const Modal = ({ showModal, toggleModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8  rounded-lg shadow-lg z-10 max-w-xl w-11/12">
            <h3 className="md:text-2xl font-bold mb-4">Reminder</h3>
            <h1 className="md:text-2xl font-bold mb-2">
              Feel free to give opinion and expression!
            </h1>
            <h2 className="md:text-2xl py-2 md:py-0">
              ASEAN Youth Forum encourages Southeast Asian youth to give
              opinions or expressions, which are guaranteed by the following
              laws:
            </h2>
            <div className="max-h-60 overflow-y-auto">
              <ol className="list-decimal text-gray-900 p-4">
                <li>
                  Indonesia has guaranteed the right to freedom of expression
                  since independence under the 1945 Constitution and Law No.
                  39/1999 concerning Human Rights (HAM).
                </li>
                <li>
                  Article 19 of the UDHR (Universal Declaration of Human Rights)
                  states: “Everyone has the right to freedom of opinion and
                  expression; this right includes freedom to hold opinions
                  without interference and to seek, receive, and impart
                  information and ideas through any media and regardless of
                  frontiers.”
                </li>
                <li>
                  ASEAN Human Rights Declaration on Nov. 18, 2012, reaffirmed
                  ASEAN's commitment to promoting and protecting human rights
                  and fundamental freedoms as well as the goals and principles
                  enshrined in the ASEAN Charter.
                </li>
                <li>
                  Article 23 of the ASEAN Human Rights Declaration affirms:
                  “Every person has the right to freedom of opinion and
                  expression, including the freedom to hold opinions without
                  interference and to seek, receive, and impart information,
                  whether orally, in writing, or through any other medium of
                  that person’s choice.”
                </li>
              </ol>
            </div>
            <h1 className="text-2xl font-bold mt-4">Rules</h1>
            <div className="max-h-28 overflow-y-auto">
              <ol className="list-decimal text-gray-900 p-4">
                <li>
                  Discuss in an orderly manner without racism or personal
                  attacks.
                </li>
              </ol>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-[#389E0D] text-white rounded"
                onClick={toggleModal}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
