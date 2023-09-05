const CustomTabsSkeleton = ({ count = 3, className }) => {
  return (
    <div className={`${className ? className : ""} cds--tabs cds--skeleton`}>
      <ul className="cds--tabs__nav">
        {Array(count)
          .fill()
          .map((_, i) => (
            <li key={i} className="cds--tabs__nav-item">
              <div className="cds--tabs__nav-link">
                <span></span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomTabsSkeleton;
