import Head from 'next/head';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import { getPastEvents } from '../data/eventsData';

export default function PastEvents({ pastEvents }) {
  // Group by year
  const byYear = pastEvents.reduce((acc, event) => {
    if (!acc[event.year]) acc[event.year] = [];
    acc[event.year].push(event);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <Layout>
      <Head>
        <title>Past Events | Medical Imaging Capex Events Platform</title>
        <meta
          name="description"
          content="Historical medical imaging events from 2023-2024: IRIA 2023-2025, RSNA 2024, Arab Health 2024."
        />
      </Head>

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block"></span>
            {pastEvents.length} past events
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Past Events</h1>
          <p className="text-gray-300 text-lg">
            Historical records of medical imaging conferences from 2023–2024.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {years.map((year) => (
          <div key={year} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{year}</h2>
              <span className="px-3 py-0.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                {byYear[year].length} event{byYear[year].length !== 1 ? 's' : ''}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byYear[year].map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pastEvents: getPastEvents(),
    },
  };
}
