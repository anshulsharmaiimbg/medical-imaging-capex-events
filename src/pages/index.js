import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import StatCard from '../components/StatCard';
import { getUpcomingEvents, getPastEvents, getStats } from '../data/eventsData';

export default function Home({ upcomingEvents, pastEvents, stats }) {
  return (
    <Layout>
      <Head>
        <title>Medical Imaging Capex Events Platform | Home</title>
        <meta
          name="description"
          content="Track medical imaging device events, exhibitions, and capital expenditure opportunities worldwide. RSNA, IRIA, Arab Health, ECR and more."
        />
      </Head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-medical-800 via-medical-700 to-medical-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-8 right-8 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {stats.upcomingCount} upcoming events in 2025–2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Medical Imaging
              <br />
              <span className="text-medical-200">Capex Events</span>
              <br />
              Platform
            </h1>
            <p className="text-lg md:text-xl text-medical-100 mb-8 leading-relaxed">
              Your comprehensive resource for tracking global medical imaging device exhibitions, annual conferences, and capital expenditure opportunities — from RSNA to IRIA and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/upcoming" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-medical-700 font-semibold text-sm hover:bg-medical-50 transition-colors shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Upcoming Events
              </Link>
              <Link href="/events" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors border border-white/30 backdrop-blur-sm">
                Browse All Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard icon="🗓️" label="Total Events" value={stats.totalEvents} color="blue" />
          <StatCard icon="✅" label="Upcoming" value={stats.upcomingCount} color="green" />
          <StatCard icon="📋" label="Past Events" value={stats.pastCount} color="purple" />
          <StatCard icon="👥" label="Attendees" value={`${(stats.totalAttendees / 1000).toFixed(0)}K+`} sub="Total across all events" color="orange" />
          <StatCard icon="🏢" label="Exhibitors" value={`${(stats.totalExhibitors / 1000).toFixed(1)}K+`} sub="Companies showcased" color="teal" />
          <StatCard icon="🌍" label="Countries" value={stats.totalCountries} sub="Countries represented" color="indigo" />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Don't miss these key medical imaging conferences</p>
          </div>
          <Link href="/upcoming" className="btn-secondary hidden sm:inline-flex text-sm">
            See all upcoming →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/upcoming" className="btn-secondary w-full justify-center">
            See all upcoming events →
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-medical-700 to-medical-600 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Plan Your Capex Strategy</h2>
          <p className="text-medical-100 text-lg mb-8">
            Use our platform to identify the best events for showcasing new imaging equipment, meeting procurement decision-makers, and exploring capital expenditure opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/events" className="px-6 py-3 rounded-lg bg-white text-medical-700 font-semibold text-sm hover:bg-medical-50 transition-colors shadow">
              Explore All Events
            </Link>
            <Link href="/about" className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors border border-white/30">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Recent Past Events</h2>
            <p className="section-subtitle">Explore highlights from 2023–2024 conferences</p>
          </div>
          <Link href="/past" className="btn-secondary hidden sm:inline-flex text-sm">
            View all past →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const stats = getStats();

  return {
    props: {
      upcomingEvents,
      pastEvents,
      stats,
    },
  };
}
