const Separator: React.FC<{ color?: { light?: string; dark?: string } }> = ({
  color,
}) => {
  const lightColor = color?.light ? color?.light : `text-sky-900`;
  const darkColor = color?.light ? color?.light : `dark:text-sky-100`;
  return <span className={`${lightColor} ${darkColor}`}>|</span>;
};

export default Separator;
