import * as React from "react";
import "../styles/post.css"; // reuse your styles
import Navbar from "./Navbar";

/** builds a slug from heading text */
const slugify = (s) =>
  s.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

/** Sticky, scroll-spy TOC that looks at .post-content h2/h3 */
function TableOfContents() {
  const [headings, setHeadings] = React.useState([]);
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    // find headings inside the post
    const nodes = Array.from(
      document.querySelectorAll(".post-content h2, .post-content h3")
    );

    const mapped = nodes.map((el) => {
      if (!el.id) el.id = slugify(el.textContent);
      return { id: el.id, text: el.textContent, level: el.tagName === "H2" ? 2 : 3 };
    });
    setHeadings(mapped);

    // observe headings
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the first visible heading closest to top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1] } // trigger as the heading enters upper half
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  if (!headings.length) return null;

  return (
    <nav className="toc" aria-label="Table of contents">
      <div className="toc-title">TABLE OF CONTENTS</div>
      <ul className="toc-list">
        {headings.map((h) => (
          <li key={h.id} className={`toc-item level-${h.level}`}>
            <a
              href={`#${h.id}`}
              className={`toc-link ${activeId === h.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", `#${h.id}`);
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


/** Page layout */
export default function PostLayout({ title, meta, tags = [], children }) {
  return (
    <main className="page">
      <Navbar />

      <div className="post-wrap">
        <header className="post-header">
          <h1>{title}</h1>

          <div className="post-meta-row">
            <div className="post-meta">{meta}</div>
            <div className="post-meta-spacer" />

            <div className="post-tags">
                {tags.map((tag) => (
                <span key={tag} className="post-tag" data-tag={tag}>
                    {tag}
                </span>
                ))}
            </div>
          </div>
        </header>

        <div className="post-grid">
          <article className="post-content">{children}</article>
          <aside className="post-aside">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </main>
  );
}

