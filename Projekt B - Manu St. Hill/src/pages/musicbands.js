import React, {useState, useEffect} from 'react'
import musicService from '../services/music-group-service';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {JournalRichtext} from 'react-bootstrap-icons'

export function MusicBands(props) {

  const [bands, setBands] = useState({});
  const [filter, setFilter] = useState(props.searchFilter || "");
  const [pageNr, setPageNr] = useState(0);
  const [pageMax, setPageMax] = useState(0);

  useEffect(() => {
  
  (async () => {

      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const a = await service.readMusicGroupsAsync(0, true, props.searchFilter);
      setBands(a);
      setPageMax(a.pageCount)
    })();

    setFilter(props.searchFilter);   
  }, [props])
  

  const onSearch = async (e) => {
    e.preventDefault();
    const searchFilter = document.getElementById("search").value;


    const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
    const _serviceData = await service.readMusicGroupsAsync(0, true, e.searchFilter);

    setBands(_serviceData);
    setFilter(searchFilter);   
    setPageMax(_serviceData.pageCount)
    setPageNr(0);
  }

  const onNextClick = async (e) => {

    if (pageNr < pageMax - 1)
      {
        
        const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
        const _serviceData = await service.readMusicGroupsAsync(pageNr + 1, true, filter);
        setPageNr(pageNr + 1);
        setBands(_serviceData);
      }
  }


  const onPrevClick = async (e) => {

    if (pageNr > 0) 
      {
      
      const service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
      const _serviceData = await service.readMusicGroupsAsync(pageNr - 1, true, filter);
      setPageNr(pageNr - 1);
      setBands(_serviceData);
    }
  }

  return (
    <div className="container px-4 py-4" id="list-of-items">
    <h2 className="pb-2 border-bottom">
        <JournalRichtext className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
         List of Bands</h2>

    <p>Below are some of the worlds most famous bands.</p>
    <p>Subscribe to meeeee!</p>

    <ListSearch searchFilter={filter} onSearch={onSearch} dbItemCount={bands.dbItemCount} bands={bands} filter={filter} />
    <List bands={bands}/>
    <ListPager onPrevClick={onPrevClick} onNextClick={onNextClick}/>
    </div>
  )
}

export function ListSearch(props) {

  const [showCard, setShowCard] = useState(false);

    const onClick = (e) => {

       e.preventDefault();

       e.searchFilter =  document.getElementById("search").value;
       if (props.onSearch) {
         props.onSearch(e);
         setShowCard(true);
       }
    }

  return (
    <>
      <div className="row mb-1 text-center">
      <div className="col-md-8 ">
        <form className="d-flex mt-3 mt-lg-0" role="search">
          <input id='search' className="form-control me-2" type="search" placeholder="Search" 
            defaultValue = {props.searchFilter} aria-label="Search"/>
          <button className="btn btn-outline-success" onClick={onClick} type='button'>Search</button>
        </form>
        {showCard && (
          <>
            <br/>
            <Card>
              <Card.Body>{props.bands.dbItemsCount} matches for "<strong>{props.filter}</strong>"</Card.Body>
            </Card>
          </>
        )}
      </div>
    </div>
  </>
  )
}

export function ListPager(props) {

  const onPrevClick = (e) => {
    if (props.onPrevClick) props.onPrevClick(e);
  }

  const onNextClick = (e) => {
    if (props.onNextClick) props.onNextClick(e);
  }

  return (
    <nav aria-label="Standard pagination example">
      <ul className="pagination">
        <li className="page-item">
        <button className="page-link" aria-label="Next" onClick={onPrevClick}>
          <span aria-hidden="true">&laquo;</span>
        </button>
        </li>

        <li className="page-item">
        <button className="page-link" aria-label="Next" onClick={onNextClick}>
          <span aria-hidden="true">&raquo;</span>
        </button>
        </li>
      </ul>
    </nav>
  )
}

export function List(props) {

    return (
        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
        <div className="col-md-7 col-lg-10">
            <div className="row mb-2 text-center">
              <div className="col-md-6 themed-grid-head-col">Group Name</div>
              <div className="col-md-3 themed-grid-head-col">Year Established</div>
              <div className="col-md-3 themed-grid-head-col">Genre</div>
            </div>

            {props.bands?.pageItems?.map((b, index) => (
              <Link style={{textDecoration: 'none'}} to={`/bandview/${b.musicGroupId}`}>
                <div key={index} className="row mb-2 text-center">

                <div className="col-md-6 themed-grid-col">{b.name}</div>
                <div className="col-md-3 themed-grid-col">{b.establishedYear}</div>
                <div className="col-md-3 themed-grid-col">{b.strGenre}</div>

                </div>
              </Link>
            ))} 
        </div>
      </div>
    )
  }
