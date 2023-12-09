import styled from 'styled-components'
import { Typography } from '@/components'
import { flexAlign, flexDirection, flexSpaceBetween } from '@/styles/common'
import GoBackIcon from '@/icons/GoBackIcon'
import ProgressIcon from '@/icons/ProgressIcon'

// TODO: main header 하나로 통일
export default function PlaylistHeader(props) {
  const {
    backgroundColor = ({ theme }) => theme.colors.white,
    title,
    subtitle,
    buttonAction,
  } = props
  return (
    <Box backgroundColor={backgroundColor}>
      <TitleBox>
        <Title>
          <Typography
            color={({ theme }) => theme.colors.black}
            size={({ theme }) => theme.fontSize.h2}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-1.28}
          >
            {title}
          </Typography>
          <IconBox>
            <ProgressIcon
              firstStep="#00916F"
              secondStep="#00916F"
              lastStep="#F84A68"
            />
          </IconBox>
        </Title>

        <SubTitle>
          <Typography
            color={({ theme }) => theme.colors.black}
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.64}
          >
            {subtitle}
          </Typography>
        </SubTitle>
      </TitleBox>
      <ButtonIcon onClick={() => buttonAction()}>
        <GoBackIcon color="#cccccc" />
      </ButtonIcon>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 32px;
  background-color: ${(props) => props.color};

  ${flexSpaceBetween}
`

const TitleBox = styled.div`
  gap: 25px;

  ${flexDirection}
`

const Title = styled.div`
  ${flexAlign}
`

const SubTitle = styled.div`
  height: 20px;
`

const IconBox = styled.div`
  height: 100%;
  padding-bottom: 3px;
`

const ButtonIcon = styled(IconBox)`
  cursor: pointer;
`
