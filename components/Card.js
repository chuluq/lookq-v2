import PropTypes from "prop-types";

export default function Card({ title, details, siteUrl, sourceUrl, tools }) {
  const renderTools = (item) => {
    return <div className="p-2">{item?.icon}</div>;
  };

  return (
    <div className="w-[30rem] xl:w-full h-auto shadow space-y-12">
      <div className="flex items-center justify-center bg-title h-32">
        <h3 className=" font-title font-bold text-xl leading-[30px] text-title-white text-center capitalize">
          {title}
        </h3>
      </div>

      <div className="px-8 space-y-8">
        <h3 className=" font-title font-bold text-xl leading-[30px] text-title capitalize">
          {title}
        </h3>

        <p className="font-body font-medium text-base leading-6 text-body">
          {details}
        </p>

        {/* Icon Tools Used */}
        {tools && tools.length > 0 && (
          <div className="flex flex-row">
            {tools?.map((item) => {
              return <div key={item?.id}>{renderTools(item)}</div>;
            })}
          </div>
        )}

        <div className="pb-8 flex flex-row items-center space-x-2">
          {siteUrl && (
            <a
              href={siteUrl}
              className="py-2 px-4 rounded border border-title font-title font-bold text-base leading-[19px] text-title hover:text-title-white uppercase bg-white hover:bg-title"
            >
              visit site
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              className="py-2 px-4 rounded border border-title font-title font-bold text-base leading-[19px] text-title-white uppercase bg-title hover:bg-body"
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
