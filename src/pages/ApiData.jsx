import React, { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const PAGE_SIZE = 10;

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((item) =>
      item.title.toLowerCase().includes(q) || String(item.id).includes(q)
    );
  }, [data, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    // reset to first page when filter changes
    setPage(1);
  }, [query]);

  return (
    <div className="space-y-4">
      <Card title="Search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or id..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
      </Card>

      <Card title="Posts">
        {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
        {error && (
          <p className="text-red-600 dark:text-red-400">Error: {error}</p>
        )}
        {!loading && !error && (
          <ul className="space-y-3">
            {pageData.map((post) => (
              <li key={post.id} className="p-4 border rounded-lg dark:border-gray-700">
                <h4 className="font-semibold mb-1">{post.id}. {post.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
              </li>
            ))}
            {pageData.length === 0 && (
              <li className="text-gray-500 dark:text-gray-400">No results</li>
            )}
          </ul>
        )}
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </Button>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="secondary"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApiData;
