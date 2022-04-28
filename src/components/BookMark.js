import Timer from '../utils/timer';

function BookMark({
  modifier,
  data,
  setSelectedBookMark,
  setSelectPreview,
}) {
  const { type, title, owner, uploadDate, duration, photoURL, id } =
    data;

  return (
    <tr>
      <td>{type || 'n/a'}</td>
      <td>{title || 'n/a'}</td>
      <td>{owner || 'n/a'}</td>
      <td>{uploadDate || 'n/a'}</td>
      <td>{duration || 'n/a'}</td>
      <td>{<Timer id={id} uploadDate={uploadDate} /> || 'n/a'}</td>

      <td>
        <img
          src={photoURL}
          style={{ width: 150, height: 150, objectFit: 'contain' }}
          alt={title}
        ></img>
      </td>
      <td>
        <div className='btn-group btn-group-sm' role='group'>
          <button
            onClick={() => setSelectPreview(data)}
            type='button'
            className='btn btn-outline-dark'
          >
            <i className='fas fa-eye'></i>
          </button>
          <button
            onClick={() => setSelectedBookMark(data)}
            type='button'
            className='btn btn-outline-dark'
          >
            <i className='fas fa-pen'></i>
          </button>
          <button
            onClick={() => modifier.remove(id)}
            type='button'
            className='btn btn-outline-dark'
          >
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default BookMark;
