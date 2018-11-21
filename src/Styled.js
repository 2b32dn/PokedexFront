import styled from 'styled-components'

const Header = styled.div`
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  justify-items: center
  align-items: center
  border-top: 2px solid black
  border-radius: 20px 20px 0 0
`
const Top = styled.div`
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  justify-items: start
  align-items: center

`

export {Header, Top}