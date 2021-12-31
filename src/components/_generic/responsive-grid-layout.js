const ResponsiveGridLayout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
      {children}
    </div>
  );
};

export default ResponsiveGridLayout;
