import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

//components
import FoodStyles from "./AllFoods.module.scss";
import {Container, Row, Col} from "react-bootstrap"
import HeaderSection from '../../components/headerSection/HeaderSection'
import allfoods from "../../components/foodMenu/allfoods"
import AllProductCard from '../../components/allProductCard/AllProductCard'

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
<Row>

<Col lg='6' md='6' sm='6'>
<div className="mt-5 mb-5 d-flex align-items-center justify-content-between searchContainer">
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

<Col lg='6' md='6' sm='6' className='mt-5 mb-5 text-end'>
<div className={FoodStyles.searchOption}>
<select>
<option>Default</option>
<option value='ascending'>A-Z</option>
<option value='descending'>Z-A</option>
<option value='high-price'>High Price</option>
<option value='low-price'>Low Price </option>
</select>
</div>
</Col>
</Row>

<Row className={FoodStyles.foodContainer}>
{
displayPage
.map(item => 
  <AllProductCard item={item}
  key={item.id}/>
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