import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import FoodStyles from "./AllFoods.module.scss";
//dummy data for all item
import allfoods from "../../components/data/allFoodData"
//components from react and folder
import {Container, Row, Col} from "react-bootstrap"
import HeaderSection from '../../components/headerSection/HeaderSection'
import ProductCard from '../../components/productCard/ProductCard'

//icons
import {BsSearch} from "react-icons/bs";

const AllfoodsPage = () =>{
 const [searchItem, setSearchItem] = useState('')
  const [sortState, setSortState] = useState(null)
const [pageNumber, setPageNumber] = useState(0)
  
  const searchedProduct = allfoods.filter((item) => {
  if(searchItem.value === '') return item;
    if(
    item.name
    .toLowerCase()
    .includes(searchItem.toLowerCase())) 
    return item;
  });

  const ProductPerPage = 6;
  const visitedPage = pageNumber * ProductPerPage;
  
  const [displayPage, setDisplayPage] = useState(searchedProduct.slice(visitedPage, visitedPage + ProductPerPage))
  //const displayPage = searchedProduct.slice(visitedPage, visitedPage + ProductPerPage)
  
  const pageCount = Math.ceil(searchedProduct.length / ProductPerPage)
  
  const changePage = ({selected}) =>{
    setPageNumber(selected)
  }
  
  //sorting data
//const sortMethods = {
/*    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };
*/

  const handleChange = (e) => {
    const value = e.target.value

    switch(value) {
        case "ascending":
            setDisplayPage(displayPage.sort((a, b) => a.name.localeCompare(b.name)))
            break
        case "descending":
  setDisplayPage(displayPage.sort((a, b) => b.name.localeCompare(a.name)))
  
            break
        case "high-price":
            setDisplayPage(displayPage.sort((a, b) => b.price - a.price))
            break
        case "low-price":
             setDisplayPage(displayPage.sort((a, b) => a.price - b.price))
            break
    }
}
  
  
  return(
    <section className={FoodStyles.Container}>
 <HeaderSection 
 title='All Dishes'
className = {FoodStyles.Title} />
 
 <Container>
<Row className="d-flex align-items-center justify-content-between my-5">

<Col>
<div className="d-flex align-items-center justify-content-between searchContainer">
<input type='text'
className={FoodStyles.searchbar}
placeholder='food search'
value={searchItem}
onChange={(e) => setSearchItem(e.target.value)}/>
<span>
<BsSearch/>
</span>
</div>
</Col>

<Col  className='text-end'>
<div className={FoodStyles.searchOption}>
<select className='bg-success text-white'
defaultValue= {'DEFAULT'} onChange={handleChange}>
<option value='DEFAULT' disabled>Default</option>
<option value='ascending'>
A-Z
</option>
<option value='descending'>Z-A</option>
</select>
<span className={FoodStyles.focus}></span>
</div>
</Col>
</Row>

<Row className='gap-5 d-flex justify-content-between'>
{
displayPage.map(item => 
  <Col xl='3' lg='3' md='4' sm='6'
      className='mb-5'
        key={item.id}>
  <ProductCard item={item}
/>
</Col>
  )
}
</Row>

<div className='mt-5'>
<ReactPaginate
pageCount={pageCount}
onPageChange= {changePage}
previousLabel = {'Prev'}
nextLabel = {'Next'}
containerClassName = 'Pagination'
/>
</div>
 </Container>
    </section>
    )
}

export default AllfoodsPage 