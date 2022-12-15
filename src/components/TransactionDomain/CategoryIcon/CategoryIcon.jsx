import React from "react";
import salary from "./../../../Assets/salary.svg";
import refund from "./../../../Assets/refund.svg";
import bonus from "./../../../Assets/bonus.svg";
import investment from "./../../../Assets/investment.svg";
import grocery from "./../../../Assets/grocery.svg";
import shopping from "./../../../Assets/shopping.svg";
import food from "./../../../Assets/food.svg"
import rent from "./../../../Assets/rent.svg"
import entertainment from "./../../../Assets/entertainment.svg"
import pet from "./../../../Assets/pet.svg"
import misc from "./../../../Assets/misc.svg"
import miscIncome from "./../../../Assets/miscIncome.svg"
const fetchCategoryIconName = (categoryName) => {
  switch (categoryName) {
    case "Salary":
      return (
        <img src={salary} alt="salaryIcon" width={"50px"} height={"100px"} />
      );
    case "Reimbursements":
      return (
        <img src={refund} alt="refundIcon" width={"50px"} height={"100px"} />
      );
    case "Bonus":
      return (
        <img src={bonus} alt="bonusIcon" width={"50px"} height={"100px"} />
      );
    case "Investment":
      return (
        <img
          src={investment}
          alt="investmentIcon"
          width={"50px"}
          height={"100px"}
        />
      );
    case "Grocery":
      return (
        <img src={grocery} alt="groceryIcon" width={"50px"} height={"100px"} />
      );
    case "Shopping":
      return (
        <img
          src={shopping}
          alt="shoppingIcon"
          width={"50px"}
          height={"100px"}
        />
      );
      case "Dining":
      return (
        <img
          src={food}
          alt="foodIcon"
          width={"50px"}
          height={"100px"}
        />
      );
      case "Rent":
      return (
        <img
          src={rent}
          alt="foodIcon"
          width={"50px"}
          height={"100px"}
        />
      );
      case "Entertainment":
        return (
          <img
            src={entertainment}
            alt="entertainmentIcon"
            width={"50px"}
            height={"100px"}
          />
        );
        case "Pet Care":
            return (
              <img
                src={pet}
                alt="petIcon"
                width={"50px"}
                height={"100px"}
              />
            );
            case "Miscellaneous Expense":
            return (
              <img
                src={misc}
                alt="miscIcon"
                width={"50px"}
                height={"100px"}
              />
            );
            case "Miscellaneous Income":
                return (
                  <img
                    src={miscIncome}
                    alt="miscIncomeIcon"
                    width={"50px"}
                    height={"100px"}
                  />
                );
    default:
      return "euro_symbol";
  }
};

function CategoryIcon({ categoryName }) {
  console.log(categoryName);
  return (
    <>
      {/* <span class="material-icons">{fetchCategoryIconName(categoryName)}</span> */}
      <div>{fetchCategoryIconName(categoryName)}</div>
    </>
  );
}

export default CategoryIcon;
