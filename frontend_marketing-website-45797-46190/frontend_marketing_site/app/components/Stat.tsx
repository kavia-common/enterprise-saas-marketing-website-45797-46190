import React from "react";

/**
 * PUBLIC_INTERFACE
 * Small metric display for hero stats.
 */
export default function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
