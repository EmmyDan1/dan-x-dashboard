type AvatarGroupProps = {
  avatars: string[];
  overflow: number;
}

export const AvatarGroup = ({ avatars, overflow }: AvatarGroupProps) => (
  <div className="flex items-center space-x-[-10px]">
    {avatars.map((url, idx) => (
      <img
        key={idx}
        src={url}
        alt="avatar"
        className="w-7 h-7 rounded-full border-2 border-secondary "
      />
    ))}
    <span className="text-xs text-white bg-primary px-2 py-1 rounded-full ml-2">
      +{overflow}
    </span>
  </div>
);