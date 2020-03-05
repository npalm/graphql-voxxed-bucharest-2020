/** @jsx jsx */
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import styled from '@emotion/styled'
import { jsx } from 'theme-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const StyledCard = styled(Card)`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
`

const BadgeItem = styled(Badge)`

  font-size: 15px;
  background-color: #777;
  color: #ffffff;
  border-radius: 10px;
  min-width: 10px;
  padding: 5px 11px;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;


  &:hover {
    border-bottom: 1px dotted #787676;
  }
`


const InfoCard = ({ name, url, description, tags, urlText }) => (
  <StyledCard>
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>
        {tags && tags.map((tag) => {
          return (
            <BadgeItem>{tag}</BadgeItem>
          )
        })}
      </Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={url}>
        <FontAwesomeIcon
          icon={['fab', 'github']}
          size="lg"
          sx={{
            marginRight: '0.5rem'
          }}
        />{' '}
        {!urlText && 'View on Github'}{urlText}
      </Button>
    </Card.Body>
  </StyledCard>
)

export default InfoCard
