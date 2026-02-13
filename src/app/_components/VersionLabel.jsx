"use client"

export default function VersionLabel() {
  const handleClick = () => {
    window.location.href = "/blog/v2026.02.13"
  }

  return (
    <span
      onClick={handleClick}
      style={{
        backgroundColor: "#4006AA",
        color: "white",
        fontSize: "12px",
        fontWeight: "600",
        padding: "2px 6px",
        borderRadius: "4px",
        lineHeight: "1",
        cursor: "pointer",
      }}
      title="View release notes"
    >
      v2026.02.13
    </span>
  )
}
