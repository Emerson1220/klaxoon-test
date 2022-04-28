import BookMark from './BookMark';
import { Context } from './ContextProvider';
import { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap';
import Formulair from './Modal';
import PreviewModal from './PreviewModal';

function BookMarkList({ perPage }) {
  const [dataBookMarks, modifier] = useContext(Context);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(perPage);
  const [selectedBookMark, setSelectedBookMark] = useState(null);
  const [selectPreview, setSelectPreview] = useState(null);
  const handlePageClick = (data) => {
    let selected = data.selected;
    setStart(selected * perPage);
    setEnd(selected * perPage + perPage);
  };
  return (
    <div>
      <Table className='striped bordered hover'>
        <thead>
          <tr>
            <th>type</th>
            <th>titre</th>
            <th>auteur</th>
            <th>date de publication</th>
            <th>duree</th>
            <th>date d'ajout</th>
            <th>preview</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataBookMarks.slice(start, end).map((el, i) => {
            return (
              <BookMark
                setSelectPreview={setSelectPreview}
                setSelectedBookMark={setSelectedBookMark}
                modifier={modifier}
                data={el}
                key={el.id}
              />
            );
          })}
        </tbody>
      </Table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(dataBookMarks.length / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      {selectPreview !== null && (
        <PreviewModal
          data={selectPreview}
          onDiscard={() => setSelectPreview(null)}
        />
      )}
      {selectedBookMark !== null && (
        <Formulair
          data={selectedBookMark}
          onSave={modifier.modify}
          onDiscard={() => setSelectedBookMark(null)}
        />
      )}
    </div>
  );
}

export default BookMarkList;
