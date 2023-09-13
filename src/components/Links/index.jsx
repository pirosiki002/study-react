import classes from "src/components/Links/Links.module.css";

export const Links = (props) => {

  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {props.items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${classes.title} mb-3 text-2xl font-semibold`}>
              {item.title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${classes.description} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              {item.description}
            </p>
          </a>
        );
      })}
    </div>
  );
}
