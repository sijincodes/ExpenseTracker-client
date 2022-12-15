import React, { useEffect, useState } from "react";
import salary from "./../../../Assets/salary.svg";
import refund from "./../../../Assets/refund.svg";
import bonus from "./../../../Assets/bonus.svg";
import investment from "./../../../Assets/investment.svg";
import grocery from "./../../../Assets/grocery.svg";
import shopping from "./../../../Assets/shopping.svg";
import food from "./../../../Assets/food.svg";
import rent from "./../../../Assets/rent.svg";
import entertainment from "./../../../Assets/entertainment.svg";
import pet from "./../../../Assets/pet.svg";
import misc from "./../../../Assets/misc.svg";
import miscIncome from "./../../../Assets/miscIncome.svg";

import "./CategoryIcon.css";
const fetchCategoryIconName = (categoryName) => {
  switch (categoryName) {
    case "Salary":
      return <img className="iconImage" src={salary} alt="salaryIcon" />;
    case "Reimbursements":
      return <img className="iconImage" src={refund} alt="refundIcon" />;
    case "Bonus":
      return <img className="iconImage" src={bonus} alt="bonusIcon" />;
    case "Investment Returns":
      return (
        <img
          className="iconImage"
          src={investment}
          alt="investmentIcon"
          width={"50px"}
          height={"100px"}
        />
      );
    case "Grocery":
      return <img className="iconImage" src={grocery} alt="groceryIcon" />;
    case "Shopping":
      return <img className="iconImage" src={shopping} alt="shoppingIcon" />;
    case "Food & Dining":
      return <img className="iconImage" src={food} alt="foodIcon" />;
    case "Rent":
      return <img className="iconImage" src={rent} alt="foodIcon" />;
    case "Entertainment":
      return (
        <img
          className="iconImage"
          src={entertainment}
          alt="entertainmentIcon"
        />
      );
    case "Pet Care":
      return <img className="iconImage" src={pet} alt="petIcon" />;
    case "Miscellaneous Expense":
      return <img className="iconImage" src={misc} alt="miscIcon" />;
    case "Miscellaneous Income":
      return (
        <img className="iconImage" src={miscIncome} alt="miscIncomeIcon" />
      );
    default:
      return miscIncome;
  }
};

function CategoryIcon({ categoryName }) {
  const [category, setCategory] = useState(<></>);
  useEffect(() => {
    setCategory(fetchCategoryIconName(categoryName));
  }, [categoryName]);
  return (
    <>
      <div>{category}</div>
    </>
  );
}

export default CategoryIcon;
