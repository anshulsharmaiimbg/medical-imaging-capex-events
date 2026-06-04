import Head from 'next/head';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import { getUpcomingEvents } from '../data/eventsData';

export default function UpcomingEvents({ upcomingEvents }) {
  return (
    <Layout>
      <Head>
        <title>Upcoming Events | Medical Imaging Capex Events Platform</title>
        <meta
          name="description"
          content="Upcoming medical imaging conferences in 2025-2026: IRIA 2026, RSNA 2025, Arab Health 2025, ECR 2025, MD&M West 2025."
        />
      </Head>

      {/* Header */}
      <div className="bg-gradient-to-r from-medical-800 to-medical-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {upcomingEvents.length} upcoming events
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h1>
          <p className="text-medical-100 text-lg">
            Key medical imaging conferences and exhibitions in 2025–2026, sorted by date.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Timeline legend */}
        <div className="flex items-center gap-3 mb-8 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            Upcoming
          </div>
          <span className="text-gray-300">·</span>
          <span>Sorted by date (earliest first)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, idx) => (
            <div key={event.id} className="relative">
              {idx === 0 && (
                <div className="absolute -top-2 -right-2 z-10 px-2.5 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full shadow">
                  Next Up
                </div>
              )}
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      upcomingEvents: getUpcomingEvents(),
    },
  };
}
