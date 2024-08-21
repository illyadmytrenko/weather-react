/**
 * @param {{
 *   label: string,
 *   required: boolean
 * }}
 */

export function UiFieldLabel({ label, id }) {
  return (
    <label htmlFor={id} className="mb-2 font-medium text-xl">
      {label}
    </label>
  );
}
