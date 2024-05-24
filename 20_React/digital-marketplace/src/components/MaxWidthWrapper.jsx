import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

// add prop types
MaxWidthWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};