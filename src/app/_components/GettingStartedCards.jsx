"use client";

import Link from "next/link";

const cards = [
  {
    title: "Cloud Platform",
    description:
      "Get started with our managed cloud platform. No infrastructure setup required.",
    href: "/docs/getting-started/cloud-setup",
    image:
      "https://d33et8skld5wvq.cloudfront.net/images/spacedf-docs/cloud-platform.png",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Self-Hosted Installation",
    description:
      "Deploy SpaceDF on your own infrastructure for complete control and customization.",
    href: "/docs/getting-started/self-hosted",
    image:
      "https://d33et8skld5wvq.cloudfront.net/images/spacedf-docs/self-host.png",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export function GettingStartedCards() {
  return (
    <div className="getting-started-grid">
      {cards.map(card => (
        <Link key={card.title} href={card.href}>
          <div className="getting-started-card">
            <img src={card.image} alt={card.title} />
            <div className="getting-started-card-content">
              <span className="getting-started-card-icon">{card.icon}</span>
              <span className="getting-started-card-title">{card.title}</span>
              <svg
                className="getting-started-card-arrow"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </Link>
      ))}

      <style jsx>{`
        .getting-started-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        .getting-started-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding: 0;
        }

        @media (max-width: 768px) {
          .getting-started-grid {
            grid-template-columns: 1fr;
          }
        }

        .getting-started-card {
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          background: white;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .getting-started-card:hover {
          border-color: #c7d2fe;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        :global(.dark) .getting-started-card {
          background: #1f2937;
          border-color: #374151;
        }

        :global(.dark) .getting-started-card:hover {
          border-color: #6366f1;
        }

        .getting-started-card-image {
          position: relative;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }

        .getting-started-card-image img {
          max-width: 100%;
          max-height: 160px;
          object-fit: contain;
          border-radius: 8px;
        }

        .getting-started-card-label {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: #4f46e5;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
        }

        .getting-started-card-content {
          display: flex;
          align-items: center;
          padding: 1rem 1.25rem;
          border-top: 1px solid #e5e7eb;
          gap: 0.75rem;
          background-color: lab(96.1596% -0.0823438 -1.13575);
        }

        :global(.dark) .getting-started-card-content {
          border-top-color: #374151;
        }

        .getting-started-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1f2937;
        }

        :global(.dark) .getting-started-card-icon {
          color: #f3f4f6;
        }

        .getting-started-card-title {
          flex: 1;
          font-weight: 500;
          color: #1f2937;
          font-size: 1rem;
        }

        :global(.dark) .getting-started-card-title {
          color: #f3f4f6;
        }

        .getting-started-card-arrow {
          color: #9ca3af;
          transition: transform 0.2s ease;
        }

        .getting-started-card:hover .getting-started-card-arrow {
          transform: translateX(4px);
          color: #4f46e5;
        }
      `}</style>
    </div>
  );
}
