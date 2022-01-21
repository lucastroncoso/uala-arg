import React from 'react';

export default function CommonInput(props) {
  return (
    <>
      <label
        htmlFor={props.htmlFor}
        className="block w-2/4 py-2 pl-0 mx-auto text-center md:mx-0 md:text-left md:pl-4"
      >
        {props.children}
      </label>
      <input
        onChange={props.onChange}
        type={props.type}
        required={props.required}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        pattern={props.pattern}
        onBlur={props.onBlur}
        className="block w-11/12 py-3 pl-4 mx-auto text-center rounded-full md:mx-0 md:text-left focus:outline-none"
      />
    </>
  );
}
