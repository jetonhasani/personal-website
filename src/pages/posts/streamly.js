import * as React from "react";
import { Link } from "gatsby";
import PostLayout from "../../components/PostLayout";

export default function StreamlyPost() {
  return (
    <PostLayout
      title="Building Streamly"
      meta="Created: Oct 2025 — Last Updated: Oct 2025"
      tags={["Android", "Firebase", "Kotlin"]}
    >
      <p>
        Streamly is a sleek movie catalogue app for Android built with Kotlin.
        It features search, a trending feed, and offline favourites.
      </p>

      <h2>Architecture</h2>
      <p>
        Streamly follows MVVM. UI is a RecyclerView grid; data flows via a
        Repository that merges remote and local sources.
      </p>

      <h3>Modules</h3>
      <p>Domain, Data, and App layers for clear separation of concerns.</p>

      <h2>Data Layer</h2>
      <h3>API Client</h3>
      <p>Retrofit with OkHttp; DTOs mapped to domain models.</p>
      <h3>Local Cache (Room)</h3>
      <p>Favourite films persisted offline; DAO exposes Flow for live updates.</p>

      <h2>Features</h2>
      <h3>Search</h3>
      <p>Debounced queries with paging to minimize network usage.</p>
      <h3>Favourites</h3>
      <p>Offline-first; sync occurs when connectivity returns.</p>

      <h2>Challenges & Solutions</h2>
      <p>Conflict resolution during sync handled by timestamp merge policy.</p>

      <p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </p>
    </PostLayout>
  );
}

export const Head = () => (
  <>
    <title>Building Streamly – Jeton Hasani</title>
    <meta name="description" content="Architecture and implementation notes for Streamly, an Android movie catalogue app." />
  </>
);
