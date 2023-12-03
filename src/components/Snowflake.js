import Image from 'next/image'
import styled, { keyframes, css } from 'styled-components'

export default function Snowflake(props) {
  const { animationDelay, width = 40, height = 38 } = props

  return (
    <ImageBox animationDelay={animationDelay}>
      <Image
        src={'/assets/Snowflake.svg'}
        width={width}
        height={height}
        alt="snow-flake"
      />
    </ImageBox>
  )
}

const fallKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  3% {
    opacity: 0.9;
  }
  100% {
    transform: translate(-50px, 100vh);
    opacity: 0;
  }
`

const ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 0;
  overflow: hidden;
  animation: ${css`
    ${fallKeyframes} 20s ease-in-out infinite
  `};
  animation-delay: ${(props) => props.animationDelay};
`
