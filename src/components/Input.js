import { useEffect, useRef, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);
  const inputRef = useRef();

  useEffect(() => {
    if (show) {
      setType("text");
      inputRef.current.focus();
    } else if (type === "password") {
      setType("password");
      inputRef.current.focus();
    }
  }, [show]);

  return (
    <label className="relative flex  border rounded-sm focus-within:border-gray-400">
      <input
        ref={inputRef}
        required={true}
        type={inputType}
        className=" w-full text-xs h-[38px] outline-none bg-zinc-50 px-2 valid:pt-[10px] peer"
        {...props}
      />
      <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {type === "password" && props?.value && (
        <button
          onClick={() => setShow((show) => !show)}
          type="button"
          className="h-full flex items-center text-sm bg-zinc-50 font-semibold pr-2"
        >
          {show ? "Gizle" : "Göster"}
        </button>
      )}
    </label>
  );
}
