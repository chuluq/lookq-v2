import PropTypes from "prop-types";

export default function Card({ title, details, siteUrl, sourceUrl, tools }) {
  return (
    <div className="lg:w-[30rem] xl:w-full h-auto shadow space-y-12 dark:border dark:border-body rounded-sm">
      <div className="flex items-center justify-center bg-title h-32 dark:bg-title-white rounded-t-sm">
        <h3 className=" font-title font-bold text-xl leading-[30px] text-title-white dark:text-title text-center capitalize">
          {title}
        </h3>
      </div>

      <div className="px-8 space-y-8">
        <h3 className="font-title font-bold text-xl leading-[30px] text-title dark:text-title-white capitalize">
          {title}
        </h3>

        <p className="font-body font-medium text-base leading-6 text-body dark:text-body-dark">
          {details}
        </p>

        {/* Icon Tools Used */}
        {tools && tools.length > 0 && (
          <div className="flex flex-row">
            {tools?.map((item) => {
              return (
                <div key={item?.id}>
                  <div className="p-2">{item?.icon}</div>
                </div>
              );
            })}
          </div>
        )}

        <div className="pb-8 flex flex-row items-center space-x-2">
          {siteUrl && (
            <a
              href={siteUrl}
              className="py-2 px-4 rounded-sm border border-title dark:border-title-white font-title font-bold text-base leading-[19px] text-title dark:text-title-white dark:hover:text-title hover:text-title-white uppercase bg-white dark:bg-transparent hover:bg-title dark:hover:bg-title-white"
            >
              visit site
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              className="py-2 px-4 rounded-sm border border-title dark:border-title-white font-title font-bold text-base leading-[19px] text-title-white uppercase dark:text-title bg-title dark:bg-title-white hover:bg-body dark:hover:bg-body-dark"
            >
              view code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  siteUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  tools: PropTypes.arrayOf(Object),
};
