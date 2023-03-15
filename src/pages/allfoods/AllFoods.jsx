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
  //const [productData, setProductData] = useState(allfoods)
const [pageNumber, setPageNumber] = useState(0)
  
  const searchedPage = allfoods.filter((item) => {
  if(searchItem.value === '') return item;
    if(
    item.name
    .toLowerCase()
    .includes(searchItem.toLowerCase())) 
    return item;
  });
  
  const ProductPerPage = 6;
  const visitedPage = pageNumber * ProductPerPage;
  
  const displayPage = searchedPage.slice(visitedPage, visitedPage + ProductPerPage)
  
  const pageCount = Math.ceil(allfoods.length / ProductPerPage)
  
  const changePage = ({selected}) =>{
    setPageNumber(selected)
  }
  
  return(
    <section className={FoodStyles.Container}>
 <HeaderSection title='All Dishes'/>
 
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
<select className='bg-success text-white'>
<option>Default</option>
<option value='ascending'>A-Z</option>
<option value='descending'>Z-A</option>
<option value='high-price'>High Price</option>
<option value='low-price'>Low Price </option>
</select>
<span className={FoodStyles.focus}></span>
</div>
</Col>
</Row>

<Row className='d-flex justify-content-between'>
{
displayPage
.map(item => 
  <Col lg='4' md='4' 
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