import { fireEvent, render } from "@testing-library/react";
import faker from "faker";
import SlideMenu from "./SlideMenu";

describe("SlideMenu", () => {
  const dataSource = Array.from({ length: 10 }, (_, i) => ({
    key: i.toString(),
    name: faker.name.gender(),
  }));
  it("应该正确的渲染组件", () => {
    const { getAllByTestId } = render(
      <SlideMenu dataSource={dataSource} activeIndex={1} />
    );

    expect(getAllByTestId("item").length).toBe(dataSource.length);
    getAllByTestId("item").forEach((ele, i) => {
      expect(ele).toHaveTextContent(dataSource[i].name);
    });
    expect(getAllByTestId("item")[1]).toHaveClass("is-active");
  });

  it("应该正确的触发onClickItem函数", () => {
    const mockFn = jest.fn();
    const { getAllByTestId } = render(
      <SlideMenu dataSource={dataSource} onClickItem={mockFn} />
    );

    fireEvent.click(getAllByTestId("item")[1]);

    expect(mockFn).toBeCalledWith(dataSource[1], 1);
  });
});
