import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

export function SearchPreview({
  preview,
  result,
  onSave,
  onDiscard,
}) {
  if (preview === true)
    return (
      <Card>
        <Card.Img variant='top' src={result.thumbnail_url} />
        <Card.Body>
          <Card.Title>Preview</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>
            author name : {result.author_name}
          </ListGroupItem>
          <ListGroupItem>title : {result.title}</ListGroupItem>
          <ListGroupItem>
            date d'ajout {result.upload_date}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant='outline-primary' onClick={onSave}>
            Add
          </Button>{' '}
          <Button variant='outline-info' onClick={onDiscard}>
            close
          </Button>
        </Card.Body>
      </Card>
    );
  if (preview === false)
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Failed to load the media</Card.Title>
            <Card.Text>please check your url</Card.Text>
            <Button variant='outline-info' onClick={onDiscard}>
              close
            </Button>
          </Card.Body>
        </Card>
      </>
    );
}
