type ProgressBarProps = {
  value: number;
}

export const ProgressBar = ({ value }: ProgressBarProps) => (
  <div className="w-full bg-white/10 rounded-full h-2">
    <div
      className=" bg-blue h-2 rounded-full transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);