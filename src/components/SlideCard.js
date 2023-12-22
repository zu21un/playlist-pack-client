import styled from 'styled-components'
import { flexAlign, flexCenter } from '@/styles/common'
import AlbumImage from './AlbumImage'
import dayjs from 'dayjs'

export default function SlideCard(props) {
  const { list, audioRefs, index } = props

  return (
    <Card>
      {list?.imageUrl ? (
        <>
          <div>
            <AlbumInfo>
              <AlbumImage imgUrl={list.imageUrl} width={80} height={80} />
              <TitleBox>
                <p>{list?.title}</p>
                <p>{list?.artistName}</p>
              </TitleBox>
            </AlbumInfo>
          </div>

          {list?.previewUrl ? (
            <div>
              <audio
                id={`card-${index}`}
                controls
                volume="0.5"
                ref={(ref) => (audioRefs.current[index] = ref)}
              >
                <source src={list.previewUrl} type="audio/mp3" />
              </audio>
            </div>
          ) : (
            <AudioBox>미리듣기를 제공하지 않는 노래</AudioBox>
          )}
        </>
      ) : (
        <>
          <Box>노래를 선물하지 않음</Box>
        </>
      )}

      <FriendName>{list.friendname}</FriendName>
      <Date>
        <BordText>선물받은 시간</BordText>

        {list?.createdDate &&
          dayjs(list.createdDate)
            .locale('ko')
            .format('YYYY년 MM월 DD일 HH시 mm분')}
      </Date>
      <Content>{list.letter}</Content>
    </Card>
  )
}

const Card = styled.div`
  flex-direction: column;
  width: 310px;
  height: 450px;
  padding: 32px 18px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.pink};
  gap: 8px;
  ${flexCenter}
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text_basic, var(--text_basic, #323232));
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  font-size: 12px;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.48px;
`

const AlbumInfo = styled.div`
  gap: 4px;
  flex-direction: column;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--main_black, #111);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.56px;

  ${flexCenter}
`

const FriendName = styled.p`
  color: var(--text_basic, var(--text_basic, #323232));
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.64px;

  ${flexCenter}
`

const Date = styled.div`
  color: var(--text_basic, var(--text_basic, #323232));
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  gap: 8px;

  ${flexAlign}
`

const BordText = styled.p`
  color: var(--text_basic, var(--text_basic, #323232));
  font-weight: 700;
`

const TitleBox = styled.div`
  text-align: center;
`

const Box = styled.div`
  ${flexCenter}
  height: 374px;
  font-size: 12px;
`
const AudioBox = styled.div`
  ${flexCenter}
  width: 100%;
  height: 120px;
  font-size: 12px;
`
