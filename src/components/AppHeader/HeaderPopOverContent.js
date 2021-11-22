import {
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import ResponsiveGridLayout from "../_generic/ResponsiveGridLayout";

const reactShit = [
  {
    name: "Custom Hooks",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Generic Components",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Utility Components",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Configs",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
];

const HeaderPopOverContent = () => {
  return (
    <>
      <ResponsiveGridLayout>
        {reactShit.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
          >
            <div className="flex md:h-full lg:flex-col">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                <div>
                  <p className="text-base font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </ResponsiveGridLayout>
      {/*<PopOverFooter />*/}
    </>
  );
};

export default HeaderPopOverContent;
