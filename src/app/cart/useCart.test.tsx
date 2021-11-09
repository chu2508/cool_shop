import { render, fireEvent } from "@testing-library/react";
import useCart from "./useCart";

const MockComp = () => {
  const { items, add, remove, subtract } = useCart();

  return (
    <div>
      <div data-testid="list">{items.length}</div>
      {items.map((item) => (
        <div data-testid={item.productId} key={item.productId}>
          {item.productId}:{item.quantity}
        </div>
      ))}
      <button onClick={() => add("1")}>add</button>
      <button onClick={() => remove("1")}>remove</button>
      <button onClick={() => subtract("1")}>subtract</button>
    </div>
  );
};

describe("UseCart", () => {
  test("应该正确的增加、减少与删除购物项", () => {
    const { getByText, getByTestId } = render(<MockComp />);

    expect(getByTestId("list")).toHaveTextContent("0");

    fireEvent.click(getByText("add"));
    fireEvent.click(getByText("add"));

    expect(getByTestId("list")).toHaveTextContent("1");
    expect(getByTestId("1")).toHaveTextContent("1:2");

    fireEvent.click(getByText("subtract"));

    expect(getByTestId("1")).toHaveTextContent("1:1");

    fireEvent.click(getByText("subtract"));

    expect(getByTestId("list")).toHaveTextContent("0");

    fireEvent.click(getByText("add"));
    fireEvent.click(getByText("remove"));

    expect(getByTestId("list")).toHaveTextContent("0");
  });
});
