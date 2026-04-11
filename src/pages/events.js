import Head from 'next/head';
import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import EventFilters from '../components/EventFilters';
import { events } from '../data/eventsData';

export default function AllEvents({ allEvents }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [year, setYear] = useState('all');

  const availableYears = useMemo(
    () => [...new Set(allEvents.map((e) => e.year))].sort((a, b) => b - a),
    [allEvents]
  );

  const filtered = useMemo(() => {
    return allEvents.filter((e) => {
      const matchSearch =
        !search ||
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.fullName.toLowerCase().includes(search.toLowerCase()) ||
        e.city.toLowerCase().includes(search.toLowerCase()) ||
        e.country.toLowerCase().includes(search.toLowerCase()) ||
        e.capexFocus.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchStatus = status === 'all' || e.status === status;
      const matchYear = year === 'all' || e.year === Number(year);
      return matchSearch && matchStatus && matchYear;
    });
  }, [allEvents, search, status, year]);

  return (
    <Layout>
      <Head>
        <title>All Events | Medical Imaging Capex Events Platform</title>
        <meta
          name="description"
          content="Browse all medical imaging device events including RSNA, IRIA, Arab Health, ECR and more. Filter by status, year, or search."
        />
      </Head>

      {/* Page header */}
      <div className="bg-gradient-to-r from-gray-900 to-medical-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">All Events</h1>
          <p className="text-gray-300 text-lg">
            {allEvents.length} medical imaging events — upcoming and past
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <EventFilters
          search={search}
          onSearch={setSearch}
          status={status}
          onStatus={setStatus}
          year={year}
          onYear={setYear}
          availableYears={availableYears}
        />

        {/* Results count */}
        <div className="flex items-center justify-between mt-6 mb-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{allEvents.length}</span> events
          </p>
          {filtered.length !== allEvents.length && (
            <button
              onClick={() => { setSearch(''); setStatus('all'); setYear('all'); }}
              className="text-sm text-medical-700 hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setSearch(''); setStatus('all'); setYear('all'); }}
              className="btn-primary"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allEvents: events,
    },
  };
}
