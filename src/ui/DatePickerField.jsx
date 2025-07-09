import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/green.css";
import DateObject from "react-date-object";

function DatePickerField({ date, setDate, label }) {
  // const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="block mb-4 text-modal-text font-semibold">{label}</div>
      <DatePicker
        value={date}
        onChange={(date) => setDate(date.toDate())}
        calendar={persian}
        locale={persian_fa}
        className="rmdp-prime green"
        containerClassName=" w-full text-center"
        inputClass="input-field w-full text-center text-red-300 outline-none"
        calendarPosition="bottom-center"
      />
    </div>
  );
}

export default DatePickerField;
