import { FC, ReactNode } from "react"

interface IButton {
  children: ReactNode
  onClick: () => void
}

const Button: FC<IButton> = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick} className="bg-black p-1 rounded-md">
        {children}
      </button>
    </div>
  )
}

export default Button
