import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { CheckboxConteiner, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxConteiner> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxConteiner {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxConteiner>
  )
}

Checkbox.displayName = 'Checkbox'
