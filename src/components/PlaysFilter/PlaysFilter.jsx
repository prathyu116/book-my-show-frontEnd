import { Disclosure } from '@headlessui/react'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
const PlayFilter = (props) => {
    return (
        <Disclosure >
            {({ open }) => (
                <>
                <div className="bg-white px-2 py-4 rounded-xl shadow-2xl">
                    <Disclosure.Button className="py-2 flex items-center gap-2 ">
                        {open ? <BiChevronUp /> : <BiChevronDown />} 
                        <span className={!open ? "text-gray-700" :"text-red-500"}>
                       {props.title}
                        </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <div className="flex items-center gap-2 flex-wrap">
                            {props.tags.map((tag)=>{
                                return (
                                    <>
                                    <div className="border-2 border-gray-200 p-1">
                                        <span className="text-red-600 text-sm">{tag}</span>
                                    </div>
                                    </>
                                )

                            })}
                        </div>
                       
                    </Disclosure.Panel>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
export default PlayFilter;
