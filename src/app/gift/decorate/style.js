import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brown};
`

const WrappingStepBox = styled.div``

export default {
  Box,
  ContentWrapper,

  WrappingStepBox,
}