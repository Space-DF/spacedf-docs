"use client";

import {useEffect, useState, useCallback} from "react";

export function ImageZoomProvider({children}) {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleClose = useCallback(() => {
    setZoomedImage(null);
  }, []);

  useEffect(() => {
    const handleImageClick = e => {
      const target = e.target;

      // Check if clicked element is an image
      if (target.tagName !== "IMG") return;

      // Skip if image is inside a link
      if (target.closest("a")) return;

      // Skip if image is a GIF
      const src = target.src || "";
      if (src.toLowerCase().includes(".gif")) return;

      // Skip small images (icons, logos, etc.)
      if (target.naturalWidth < 100 || target.naturalHeight < 100) return;

      // Skip images with specific classes or inside specific containers
      if (
        target.closest("nav") ||
        target.closest("header") ||
        target.closest("footer")
      )
        return;
      if (target.classList.contains("no-zoom") || target.closest(".no-zoom"))
        return;

      e.preventDefault();
      setZoomedImage({
        src: target.src,
        alt: target.alt || "",
      });
    };

    document.addEventListener("click", handleImageClick);

    return () => {
      document.removeEventListener("click", handleImageClick);
    };
  }, []);

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") {
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [zoomedImage]);

  return (
    <>
      {children}
      <style>{`
        article img:not([src*=".gif"]):not(.no-zoom) {
          cursor: pointer;
        }
        @keyframes imageZoomFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes imageZoomScaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      {zoomedImage && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            cursor: "zoom-out",
            animation: "imageZoomFadeIn 0.2s ease",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s ease",
              zIndex: 10000,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            }}
            aria-label="Close zoom"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <span
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "13px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Press ESC or click anywhere to close
          </span>

          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.6)",
              animation: "imageZoomScaleIn 0.25s ease",
              cursor: "default",
            }}
          />
        </div>
      )}
    </>
  );
}

export default ImageZoomProvider;
