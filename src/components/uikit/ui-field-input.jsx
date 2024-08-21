import clsx from "clsx";

/**
 * @param {{
 * type: string;
 * required?: boolean;
 * isError?: boolean;
 * } & import('react').HTMLAttributes<HTMLInputElement>} props -
 */

export function UiFieldInput({ type, id, ...inputProps }) {
  return (
    <>
      <input
        type={type}
        id={id}
        className="px-2 py-2 outline-0 border block w-full rounded-md shadow-sm 
          focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 
          disabled:text-gray-500 focus:border-teal-500 focus:ring focus:ring-teal-600/20 border-slate-600"
        {...inputProps}
      />
    </>
  );
}
