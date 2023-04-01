import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import FoodStyles from "./AllFoods.module.scss";
//dummy data for all item
import allfoods from "../../components/data/allFoodData";
//components from react and folder
import { Container, Row, Col } from "react-bootstrap";
import HeaderSection from "../../components/headerSection/HeaderSection";
import ProductCard from "../../components/productCard/ProductCard";

//icons
import { BsSearch } from "react-icons/bs";

const AllfoodsPage = () => {
  const [searchItem, setSearchItem] = useState("");
  const [sortState, setSortState] = useState("ascending");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = allfoods.filter((item) => {
    if (searchItem.value === "") return item;
    if (item.name.toLowerCase().includes(searchItem.toLowerCase())) return item;
  });

  const ProductPerPage = 6;
  const visitedPage = pageNumber * ProductPerPage;

  const [displayPage, setDisplayPage] = useState(
    searchedProduct.slice(visitedPage, visitedPage + ProductPerPage)
  );
  //const displayPage = searchedProduct.slice(visitedPage, visitedPage + ProductPerPage)

  const pageCount = Math.ceil(searchedProduct.length / ProductPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleChange = (e) => {
    setSortState(e.target.value);
  };

  useEffect(() => {
    const sorted = [...searchedProduct];

    console.log(sorted);

    switch (sortState) {
      case "ascending":
        sorted.sort((a, b) =>
          new Intl.Collator(undefined, {
            sensitivity: "base",
            ignorePunctuation: true,
          }).compare(a.name, b.name)
        );
        break;

      case "descending":
        sorted.sort((a, b) =>
          new Intl.Collator(undefined, {
            sensitivity: "base",
            ignorePunctuation: true,
          }).compare(b.name, a.name)
        );
        break;

      case "low-price":
        sorted.sort((a, b) =>
          new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: "base",
          }).compare(a.price, b.price)
        );
        break;

      case "high-price":
        sorted.sort((a, b) =>
          new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: "base",
          }).compare(b.price, a.price)
        );
        break;

      default:
        sorted.sort((a, b) =>
          new Intl.Collator(undefined, {
            sensitivity: "base",
            ignorePunctuation: true,
          }).compare(a.name, b.name)
        );
        break;
    }

    setDisplayPage(sorted.slice(visitedPage, visitedPage + ProductPerPage));
  }, [visitedPage, sortState]);

  return (
    <section className={FoodStyles.Container}>
      <HeaderSection title="All Dishes" className={FoodStyles.Title} />

      <Container>
        <Row className="d-flex align-items-center justify-content-between my-5">
          <Col>
            <div className="d-flex align-items-center justify-content-between searchContainer">
              <input
                type="text"
                className={FoodStyles.searchbar}
                placeholder="food search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <span>
                <BsSearch />
              </span>
            </div>
          </Col>

          <Col className="text-end">
            <div className={FoodStyles.searchOption}>
              <select
                className="bg-success text-white"
                defaultValue={"ascending"}
                onChange={handleChange}
              >
                <option value="DEFAULT" disabled>
                  Default
                </option>
                <option value="ascending" onChange={handleChange}>
                  Name A-Z
                </option>
                <option value="descending" onChange={handleChange}>
                  Name Z-A
                </option>
                <option value="high-price" onChange={handleChange}>
                  Price High-Low
                </option>
                <option value="low-price" onChange={handleChange}>
                  Price Low-High
                </option>
              </select>
              <span className={FoodStyles.focus}></span>
            </div>
          </Col>
        </Row>

        <Row className="gap-5 d-flex justify-content-between">
          {displayPage.map((item) => (
           <Col xl="3" lg="3" md="5"  className="mb-5" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>

        <div className="mt-5">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName="Pagination"
          />
        </div>
      </Container>
    </section>
  );
};

export default AllfoodsPage;
