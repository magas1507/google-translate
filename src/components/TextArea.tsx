import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"
import type React from "react"


interface Props {
  type: SectionType
  loading?: undefined
  onChange: (value: string) => void
  value: string

}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'introducir texto'
  if (loading) return 'Cargando ...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {

  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#hf5f5f5' }


  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}