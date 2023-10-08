import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

export default function Mobile_Input(props) {
  const {mobile, set_mobile,country, set_country} = {...props};
  return (
    <PhoneInput
      defaultCountry="KE"
      value={mobile}
      onChange={set_mobile}
      onCountryChange={set_country}
    />
  )
}