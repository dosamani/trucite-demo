'use client';

export default function CommitBadge() {
  const sha = process.env.NEXT_PUBLIC_COMMIT || '';
  const branch = process.env.NEXT_PUBLIC_BRANCH || 'main';
  const repo = process.env.NEXT_PUBLIC_REPO || '';
  if (!sha) return null;

  const href = repo ? `${repo}/commit/${sha}` : '#';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="commit-badge"
      title={`Commit ${sha} on ${branch}`}
    >
      {sha} • {branch}
    </a>
  );
}
