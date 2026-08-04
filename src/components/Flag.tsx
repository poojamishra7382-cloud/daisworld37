interface FlagProps {
  code: string;
  className?: string;
}

export default function Flag({ code, className = 'w-7 h-5' }: FlagProps) {
  return (
    <img
      src={`https://flagcdn.com/w80/${code}.png`}
      srcSet={`https://flagcdn.com/w160/${code}.png 2x`}
      alt={`${code.toUpperCase()} flag`}
      className={`${className} rounded-sm object-cover shadow-sm flex-shrink-0`}
      loading="lazy"
    />
  );
}
