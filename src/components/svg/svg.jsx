import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders SVG icons in shorthand
 * @param {object} props
 */
export default function Svg (props) {
  return (
    <svg className={props.styling}>
      <use href={`#${props.svgName}`} xlinkHref={`#${props.svgName}`} />
    </svg>
  );
}

Svg.propTypes = {
  svgName: PropTypes.string.isRequired,
  styling: PropTypes.string
};

Svg.defaultProps = {
  styling: undefined
};
