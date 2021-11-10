import { render, waitFor, act } from "@testing-library/react";
import useCountDown from "../useCountDown";

const MockComp = () => {
  const { hour, minute, second } = useCountDown(
    "2021-10-10T00:00:00+08:00",
    "2021-10-10T10:00:00+08:00"
  );
  return <div data-testid="test">{`${hour}:${minute}:${second}`}</div>;
};
describe("useCountDown", () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("倒计时应该正常计算", async () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<MockComp />);

    expect(getByTestId("test")).toHaveTextContent("10:0:0");

    await act(() => Promise.resolve(jest.advanceTimersByTime(1000)));

    expect(getByTestId("test")).toHaveTextContent("9:59:59");

    await act(() => Promise.resolve(jest.advanceTimersByTime(60 * 1000)));

    expect(getByTestId("test")).toHaveTextContent("9:59:0");
  });
});
