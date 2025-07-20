type StatusBadgeProps = {
  label: string;
  color: string;
}

export const StatusBadge = ({ label, color }: StatusBadgeProps) => (
  <span className={`text-white text-xs px-3 py-1 rounded-full ${color}`}>
    • {label}
  </span>
);