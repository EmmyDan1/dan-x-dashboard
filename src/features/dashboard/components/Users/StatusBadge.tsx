type StatusBadgeProps = {
  label: string;
  color: string;
  className?: string
}

export const StatusBadge = ({ label, color, className }: StatusBadgeProps) => (
  <span className={`text-white text-xs px-3 py-1 rounded-full ${color} ${className}`}>
    • {label}
  </span>
);