// Assets
import { ReactComponent as StacklineLogo } from '../assets/stackline_logo.svg';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <StacklineLogo className="logo" />
      </div>
    </div>
  );
};

export default TopBar;
