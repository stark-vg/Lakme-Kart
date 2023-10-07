import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  background-color: azure;
`;

const Div = styled.div`
  display: block;
  background-color: azure;
  padding:20px 0px 30px 0px;
`;

const Categories = () => {
  return (
    <>
      <Div class="col-sm-12 col-md-12">
        <h3 class="text-center mt-4 text-secondary">FIND YOUR MATCH</h3>

        <Container>
          {categories.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Container>
      </Div>
    </>
  );
};

export default Categories;
