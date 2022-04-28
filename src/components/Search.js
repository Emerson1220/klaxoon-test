import { useState, useContext } from 'react';
import { Context } from './ContextProvider';
import {
  InputGroup,
  FormControl,
  Button,
  Spinner,
} from 'react-bootstrap';
import { filterData } from '../utils/filter';
import { SearchPreview } from './SearchPreview';

function Search() {
  const [result, setResult] = useState({});
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState(false);
  const [search, setSearch] = useState(false);
  const [dataBookMarks, actions] = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    if (search) return;
    setSearch(true);
    fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
      .then((res) => res.json())
      .then((res) => {
        setResult(res);
        console.log(res);

        setPreview(true);
        setSearch(false);
      })
      .catch(() => {
        setSearch(false);
      });
  }

  return (
    <div id='search'>
      <h1>Test Klaxoon</h1>
      <p>https://vimeo.com/565486457</p>
      <p>https://www.flickr.com/photos/feuilllu/45771361701/</p>
      <form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <InputGroup>
            <InputGroup.Text>URL :</InputGroup.Text>
          </InputGroup>
          <FormControl
            aria-describedby='basic-addon1'
            onChange={(e) => setUrl(e.target.value)}
          />
          <InputGroup>
            <Button
              type='submit'
              variant={
                search ? 'outline-secondary' : 'outline-primary'
              }
            >
              {search && (
                <Spinner
                  as='span'
                  animation='grow'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
              )}
              {search ? 'Loading...' : 'Search'}
            </Button>
          </InputGroup>
        </InputGroup>
      </form>

      <div id='previewSearch'>
        <SearchPreview
          preview={preview}
          result={result}
          onDiscard={() => setPreview(false)}
          onSave={() => actions.prepend(filterData(result))}
        />
      </div>
    </div>
  );
}

export default Search;
