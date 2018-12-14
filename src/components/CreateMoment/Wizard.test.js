import React from "react";
import { mount, shallow } from "enzyme";
import { WizardTest } from "./Wizard";

describe("<Wizard/>", () => {
  let e = {
    preventDefault: () => {}
  };
  const wrapper = shallow(<WizardTest />);
  wrapper.setState({ pageNumber: 3 });
  it("it should subtract", () => {
    wrapper.instance().decrement(e);
    expect(wrapper.instance().state.pageNumber).toEqual(2);
  });
  it("it should add", () => {
    wrapper.instance().increment(e);
    expect(wrapper.instance().state.pageNumber).toEqual(3);
  });
});
