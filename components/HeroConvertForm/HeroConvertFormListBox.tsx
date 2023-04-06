import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "../Icons";
import { HeroConvertFormListBoxProps } from "@/types";

export const HeroConvertFormListBox: React.FC<HeroConvertFormListBoxProps> = ({
  currency,
  currencyList,
  onChange,
  fixedBase,
}) => {
  return (
    <Listbox
      value={currency}
      onChange={(cur) => {
        if (fixedBase) return;
        else onChange(cur);
      }}
    >
      <div className="relative">
        <Listbox.Button
          as="strong"
          className="relative cursor-pointer flex items-center"
        >
          {currency}

          <ChevronUpDownIcon
            className={"h-5 w-5 text-gray-400 " + (fixedBase && "hidden")}
            aria-hidden="true"
          />
        </Listbox.Button>

        {!fixedBase && (
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="listbox-one">
              {currencyList.map((cur, curIdx) => (
                <Listbox.Option
                  key={curIdx}
                  className={`listbox-one-option`}
                  value={cur.code}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={` ${
                          selected
                            ? "font-medium text-indigo-500"
                            : "font-normal"
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
        )}
      </div>
    </Listbox>
  );
};
