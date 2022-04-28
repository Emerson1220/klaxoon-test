import { Button, Modal, Form, Col } from 'react-bootstrap';
function Formulair({ onSave, onDiscard, data }) {
  const { type, title, owner, uploadDate, duration, photoURL, id } =
    data;
  function getDataFromForm() {
    var formEl = document.forms.formModal;
    var formData = new FormData(formEl);
    const obj = {};
    for (var key of formData.keys()) {
      obj[key] = formData.get(key);
    }

    onSave(id, Object.assign({}, data, obj));
    onDiscard();
  }
  return (
    <>
      <Modal show={true} onHide={onDiscard}>
        <Modal.Header closeButton>
          <Modal.Title>formulair</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='formModal'>
            <div>
              <Form.Group as={Col} controlId='type'>
                <Form.Label>type</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='type'
                  name='type'
                  defaultValue={type}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='title'>
                <Form.Label>title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='title'
                  name='title'
                  defaultValue={title}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId='owner'>
                <Form.Label>owner</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='owner'
                  name='owner'
                  defaultValue={owner}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='uploadDate'>
                <Form.Label>uploadDate</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='uploadDate'
                  name='uploadDate'
                  defaultValue={uploadDate}
                />
              </Form.Group>
            </div>
            <div>
              <Form.Group as={Col} controlId='photoURL'>
                <Form.Label>photoURL</Form.Label>
                <Form.Control
                  placeholder='photoURL'
                  name='photoURL'
                  defaultValue={photoURL}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='duration'>
                <Form.Label>duration</Form.Label>
                <Form.Control
                  placeholder='duration'
                  name='duration'
                  defaultValue={duration}
                />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onDiscard}>
            Close
          </Button>
          <Button variant='primary' onClick={getDataFromForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulair;
