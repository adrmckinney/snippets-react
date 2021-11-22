import { CheckCircleIcon, PhoneIcon, PlayIcon } from "@heroicons/react/outline";

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

const PopOverFooter = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
        {callsToAction.map((item) => (
          <div key={item.name} className="flow-root">
            <a
              href={item.href}
              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              <item.icon
                className="flex-shrink-0 h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">{item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopOverFooter;
