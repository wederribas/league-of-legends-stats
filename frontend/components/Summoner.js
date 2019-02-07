import styled from 'styled-components'

const PROFILE_ICON_URL =
  'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/'

const Article = styled.article`
  margin: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Icon = styled.img`
  border-radius: 50%;
`

const Name = styled.h3`
  margin-left: 50px;
`

const Level = styled.p`
  margin-left: 10px;
  font-style: italic;
  font-size: 10pt;
`

const Summoner = props => {
  const { name, profileIconId, summonerLevel } = props.data
  return (
    <Article>
      <Icon src={PROFILE_ICON_URL + profileIconId + '.png'} />
      <Name>{name}</Name>
      <Level>Level {summonerLevel}</Level>
    </Article>
  )
}

export default Summoner
