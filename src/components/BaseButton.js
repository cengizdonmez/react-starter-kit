import classNames from "classnames";

function BaseButton({ children, variant = 'default'}) {
  return (
    <button className={classNames({
      "inline-flex px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white": true,
      "bg-indigo-600": variant === 'default',
      "bg-green-600": variant === 'success',
      "bg-red-600": variant === 'danger',
      "bg-yellow-600": variant === 'warning',
      "bg-blue-600": variant === 'info',
    })}> {children} </button>
  )
}

export default BaseButton;