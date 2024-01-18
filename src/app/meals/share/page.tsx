"use client";

import { useFormState } from "react-dom";
import ImagePicker from "@/components/meals/ImagePicker";
import { postMeal } from "@/lib/actions";
import FormSubmit from "@/components/meals/FormSubmit";

const SharePage = () => {
  const formRowStyle = "flex flex-col gap-2 my-2 lg:my-4";
  const labelStyle = "text-xs font-bold md:text-sm uppercase";
  const inputStyle =
    "px-2 py-1 rounded-sm border border-[#454952] bg-[#1c2027] text-base lg:text-lg text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d] focus:ring-0";

  const [state, formAction] = useFormState(postMeal, null);
  console.log(state);

  return (
    <>
      <header>
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Share your{" "}
          <span className="gradient-text-primary">Favourite Recipe</span>
        </h1>
        <p>Or any other Recipe you would like to share with other foodies...</p>
      </header>
      <main className="my-8 lg:my-16">
        <form action={formAction} id="meal-form" className="w-full lg:w-4/5">
          <div className="flex md:flex-row flex-col gap-0 md:gap-4 w-full">
            <div className={`${formRowStyle} w-full md:w-1/2`}>
              <label htmlFor="input-name" className={labelStyle}>
                Name
              </label>
              <input
                type="text"
                required
                id="input-name"
                name="name"
                className={inputStyle}
              />
            </div>
            <div className={`${formRowStyle} w-full md:w-1/2`}>
              <label htmlFor="input-email" className={labelStyle}>
                Your Email
              </label>
              <input
                type="email"
                required
                id="input-email"
                name="email"
                className={inputStyle}
              />
            </div>
          </div>
          <div className={formRowStyle}>
            <label htmlFor="input-title" className={labelStyle}>
              Title
            </label>
            <input
              type="text"
              required
              id="input-title"
              name="title"
              className={inputStyle}
            />
          </div>
          <div className={formRowStyle}>
            <label htmlFor="input-summary" className={labelStyle}>
              Short Summary
            </label>
            <input
              type="text"
              required
              id="input-summary"
              name="summary"
              className={inputStyle}
            />
          </div>
          <div className={formRowStyle}>
            <label htmlFor="input-instructions" className={labelStyle}>
              Instructions
            </label>
            <textarea
              required
              rows={5}
              id="input-instructions"
              name="instructions"
              className={inputStyle}
            />
          </div>
          <div>
            {" "}
            <ImagePicker label="Choose an image.." name="image" />
          </div>
          {state && (
            <ul className="flex gap-2 flex-col text-red-500">
              {state.map((item) => (
                <li
                  key={item.path[0]}
                >{`${item.path[0]} - ${item.message}*`}</li>
              ))}
            </ul>
          )}
          <div className="flex justify-end">
            <FormSubmit />
          </div>
        </form>
      </main>
    </>
  );
};

export default SharePage;
