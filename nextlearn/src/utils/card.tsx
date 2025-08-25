import React from "react";

export function AvatarCard({
  children,
  size = 200,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <div
      className="
        rounded-full
        bg-gradient-to-br from-white/60 to-blue-200/40
        backdrop-blur-md
        border border-white/100
        shadow-lg
        p-8
        flex items-center justify-center
        transition-shadow
        hover:shadow-2xl
      "
      style={{
        width: size,
        height: size,
        aspectRatio: "1/1",
        // margin: size * 0.2, // 可根据需要调整内边距
      }}
    >
      {children}
    </div>
  );
}

export default function ScientistCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-xl
        bg-gradient-to-br from-white/60 to-blue-200/40
        backdrop-blur-md
        border border-white/100
        shadow-lg
        p-8
        flex items-center justify-center
        transition-shadow
        hover:shadow-2xl
      "
      style={
        {
          // aspectRatio: "1/1", // 可以移除或根据需要调整
        }
      }
    >
      {children}
    </div>
  );
}
