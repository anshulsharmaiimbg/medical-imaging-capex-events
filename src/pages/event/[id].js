import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { events, getEventById } from '../../data/eventsData';

export default function EventDetail({ event }) {
  if (!event) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Link href="/events" className="btn-primary">
            Back to All Events
          </Link>
        </div>
      </Layout>
    );
  }

  const statusColor =
    event.status === 'upcoming'
      ? 'from-medical-800 to-medical-600'
      : 'from-gray-800 to-gray-700';

  return (
    <Layout>
      <Head>
        <title>{event.name} | Medical Imaging Capex Events Platform</title>
        <meta name="description" content={event.description} />
      </Head>

      {/* Hero */}
      <div className={`bg-gradient-to-br ${statusColor} text-white py-14`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/events" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Events
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
              event.status === 'upcoming' ? 'bg-emerald-400/20 text-emerald-200' : 'bg-white/20 text-gray-200'
            }`}>
              {event.status === 'upcoming' ? '🟢 Upcoming' : '⚫ Past'}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
              {event.category === 'International' ? '🌍' : '🇮🇳'} {event.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{event.name}</h1>
          <p className="text-xl text-white/80 mb-6">{event.fullName}</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lg">📅</span>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {event.status === 'upcoming' ? '✨ What to Expect' : '🏆 Highlights'}
              </h2>
              <ul className="space-y-3">
                {event.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-medical-100 text-medical-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Themes */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Key Themes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.themes.map((theme) => (
                  <div
                    key={theme}
                    className="flex items-center gap-3 p-3 rounded-xl bg-medical-50 border border-medical-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-medical-500 flex-shrink-0"></span>
                    <span className="text-sm font-medium text-medical-800">{theme}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Capex Focus */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Capex Focus Areas</h2>
              <div className="flex flex-wrap gap-2">
                {event.capexFocus.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gradient-to-r from-medical-700 to-medical-600 text-white text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick stats */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Event Statistics</h3>
              <div className="space-y-4">
                <Stat icon="👥" label="Expected Attendees" value={event.attendees.toLocaleString()} />
                <Stat icon="🏢" label="Exhibiting Companies" value={event.exhibitors.toLocaleString()} />
                {event.presentations && (
                  <Stat icon="🎤" label="Presentations" value={event.presentations.toLocaleString()} />
                )}
                <Stat icon="📍" label="Location" value={`${event.city}, ${event.country}`} />
                <Stat icon="🗓️" label="Year" value={event.year} />
              </div>
            </div>

            {/* Registration / Links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔗 Links</h3>
              {event.status === 'upcoming' ? (
                <div className="space-y-3">
                  {event.registrationUrl && event.registrationUrl !== '#' && (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      Register Now →
                    </a>
                  )}
                  {event.websiteUrl && event.websiteUrl !== '#' && (
                    <a
                      href={event.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full justify-center"
                    >
                      Official Website ↗
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">This event has concluded. Registration is no longer available.</p>
              )}
            </div>

            {/* Navigate */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Navigate</h3>
              <div className="space-y-2">
                <Link href="/events" className="flex items-center gap-2 text-sm text-medical-700 hover:text-medical-900 font-medium transition-colors">
                  ← All Events
                </Link>
                <Link href="/upcoming" className="flex items-center gap-2 text-sm text-medical-700 hover:text-medical-900 font-medium transition-colors">
                  📅 Upcoming Events
                </Link>
                <Link href="/past" className="flex items-center gap-2 text-sm text-medical-700 hover:text-medical-900 font-medium transition-colors">
                  📋 Past Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>{icon}</span>
        {label}
      </div>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = events.map((e) => ({ params: { id: e.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = getEventById(params.id);
  return {
    props: { event: event || null },
  };
}
