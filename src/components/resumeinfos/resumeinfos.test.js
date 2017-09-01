import React from 'react';
import { shallow } from 'enzyme';
import Resume from './resumeinfos';

const wrapper = shallow(<Resume />);
const name = <h3>David Wieczorek</h3>;
const job = <h4>Lead Front End Developer</h4>;

describe('Resume infos', () => {
  it('renders my name', () => {
    expect(wrapper).toContainReact(name);
  });
  it('renders job', () => {
    expect(wrapper).toContainReact(job);
  });
});
