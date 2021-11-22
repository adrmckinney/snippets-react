import PopOver from "../_generic/PopOvers/PopOver";
import MobilePopOverButton from "../_generic/PopOvers/MobilePopOverButton";
import MobilePopOver from "../_generic/PopOvers/MobilePopOver";
import PopOverWrapper from "../_generic/PopOvers/PopOverWrapper";
import PopOverGroup from "../_generic/PopOvers/PopOverGroup";
import HeaderTitle from "./HeaderTitle";
import HeaderPopOverContent from "./HeaderPopOverContent";

const AppHeader = () => {
  return (
    <PopOverWrapper>
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <HeaderTitle />

          <MobilePopOverButton />

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <PopOverGroup>
              <PopOver title={"React"} children={<HeaderPopOverContent />} />
              <PopOver title={"Laravel"} children={<HeaderPopOverContent />} />
            </PopOverGroup>
            {/*<LoginContainer />*/}
          </div>
        </div>
      </div>

      <MobilePopOver />
    </PopOverWrapper>
  );
};

export default AppHeader;
