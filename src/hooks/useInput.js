import { useState } from 'react'

const useInput = (initialValue, customInvalidMessage, type) => {
  const [value, setValue] = useState(initialValue)
  const [percentage, setPercentage] = useState(0)
  const valuePercentage = 16.6666667

  const onChange = (e) => {
    if (type !== 'currency') {
      if (type !== 'onlyNumber') {
        setValue(e.target.value)
      }

      if (e.target.type === 'checkbox') {
        setValue(e.target.checked)
        // e.target.checked ? setPercentage(14.2857143) : setPercentage(0)
      } else if (e.target.type === 'email') {
        if (e.target.value.includes('@') && e.target.value.includes('.')) {
          e.target.value && setPercentage(valuePercentage)
        } else {
          setPercentage(0)
        }
      } else {
        e.target.value ? setPercentage(valuePercentage) : setPercentage(0)
      }

      // Validation Message

      e.target.setCustomValidity('')
      if (!e.target.validity.valid) {
        if (e.target.type === 'email') {
          e.target.setCustomValidity('Please enter a valid email')
        }
        if (e.target.type === 'tel') {
          e.target.setCustomValidity('Please enter a number')
        }
      } else {
        if (!e.target.value) {
          e.target.setCustomValidity(customInvalidMessage)
        }
      }

      // Custom inputs

      if (type === 'name' || type === 'surname') {
        setValue(e.target.value.replace(/\b\w/g, function (m) { return m.toUpperCase() }))
      }

      if (type === 'onlyNumber') {
        const onlyNumber = /^[0-9\b]+$/
        if (e.target.value === '' || onlyNumber.test(e.target.value)) {
          setValue(e.target.value)
        }
      }
    } else {
      setValue(e)
    }
  }

  const onInvalid = (e) => {
    e.target.setCustomValidity(customInvalidMessage)
  }

  return { value, onChange, onInvalid, setValue, percentage }
}

export default useInput
