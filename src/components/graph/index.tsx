interface GraphProps {
  maxSize: number; // max Y axis value (size)
  barCount: number; // how many elements will be sorted
}

export function Graph({ maxSize, barCount }: GraphProps) {
  console.log(maxSize, barCount);
  return (
    <div className='grid grow w-1000 max-w-1000 h-2/3 bg-gray-400 text-red-600'></div>
  );
}
