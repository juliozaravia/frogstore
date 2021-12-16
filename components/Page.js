import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>I'm the Page Component!</h2>
      <p>{children}</p>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
