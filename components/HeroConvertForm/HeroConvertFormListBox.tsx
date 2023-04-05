import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "../Icons";
import { HeroConvertFormListBoxProps } from "@/types";

export const HeroConvertFormListBox: React.FC<HeroConvertFormListBoxProps> = ({
  currency,
  currencyList,
  onChange,
}) => {
  return (
    <Listbox value={currency} onChange={(cur) => onChange(cur)}>
      <div className="relative">
        <Listbox.Button
          as="strong"
          className="relative cursor-pointer flex items-center"
        >
          {currency}

          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute -right-3 top-9 z-[1] mt-1 max-h-60 w-[200px] overflow-auto overflow-x-hidden rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {currencyList.map((cur, curIdx) => (
              <Listbox.Option
                key={curIdx}
                className={`relative w-[200px] select-none py-1 px-2 cursor-pointer hover:bg-indigo-300 hover:text-slate-100 block truncate `}
                value={cur.code}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={` ${
                        selected ? "font-medium text-indigo-500" : "font-normal"
                      }`}
                    >
                      {/* {selected ? (
                      <span className=" text-amber-600">
                        <CheckIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null} */}
                      {cur.code + " - " + cur.title}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
