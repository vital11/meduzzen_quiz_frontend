import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"


interface ButtonDropleftProps {
	children: React.ReactNode
    title: string
}

export default function ButtonDropleft({ children, title }: ButtonDropleftProps) {

	return (
		<Menu>
			<Menu.Button className="inline-flex justify-center items-center w-full px-5 py-3 rounded-xl text-lg font-medium text-white bg-gray-200 hover:bg-emerald-300 active:bg-emerald-500 outline-none">
                { title }
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
			<Menu.Items className="absolute right-0 z-10 mt-2 w-[600px] origin-top-right rounded-2xl bg-white shadow-lg">
                { children }
			</Menu.Items>
		</Menu>
	)
}
