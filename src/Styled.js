import styled from 'styled-components'

const Header = styled.div`
  display: grid
  grid-template-columns: 1fr 1fr 1fr
`
const Top = styled.div`
  display: grid
  grid-template-columns: 1fr 1fr
  justify-items: center
  align-items: center
  border: 1px solid black
`

export {Header, Top}