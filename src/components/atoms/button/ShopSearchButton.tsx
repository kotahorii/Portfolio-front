import { memo, VFC } from 'react'

type Props = {
  onClick: () => void
  title: string
}
export const ShopSearchButton: VFC<Props> = memo(({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border-solid text-blue-800 border-blue-800 transition duration-300 hover:bg-blue-100 focus:outline-none border-2 rounded-lg"
    >
      {title}
    </button>
  )
})
