import React from 'react';
import { create } from 'react-test-renderer/cjs/react-test-renderer.production.min';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com'/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('it-kamasutra.com');
  });

  test('after creation span with status should be displayed', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com'/>);
    const root = component.root;
    let span = root.findByType;
    expect(span.children[0]).toBe('it-kamasutra.com');
  });

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com'/>);
    const root = component.root;
    let span = root.findByType;
    span.props.onDoubleClick();
    let input = root.findByType;
    expect(input.props.value).toBe('it-kamasutra.com');
  })
})