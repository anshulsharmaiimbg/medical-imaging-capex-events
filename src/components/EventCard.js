import Link from 'next/link';

export default function EventCard({ event, compact = false }) {
  const statusBadge =
    event.status === 'upcoming' ? (
      <span className="badge-upcoming">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 inline-block"></span>
        Upcoming
      </span>
    ) : (
      <span className="badge-past">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5 inline-block"></span>
        Past
      </span>
    );

  const categoryBadge =
    event.category === 'International' ? (
      <span className="badge-international">🌍 International</span>
    ) : (
      <span className="badge-national">🇮🇳 National</span>
    );

  return (
    <div className="card group">
      {/* Color strip by status */}
      <div
        className={`h-1.5 w-full ${
          event.status === 'upcoming' ? 'bg-gradient-to-r from-medical-600 to-medical-400' : 'bg-gradient-to-r from-gray-400 to-gray-300'
        }`}
      />

      <div className={compact ? 'p-4' : 'p-6'}>
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {statusBadge}
          {categoryBadge}
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-gray-900 group-hover:text-medical-700 transition-colors mb-1 ${
            compact ? 'text-base' : 'text-xl'
          }`}
        >
          {event.name}
        </h3>
        <p className={`text-gray-500 mb-4 ${compact ? 'text-xs line-clamp-1' : 'text-sm line-clamp-2'}`}>
          {event.fullName}
        </p>

        {/* Info grid */}
        <div className={`grid gap-3 mb-4 ${compact ? 'grid-cols-1' : 'grid-cols-2'}`}>
          <InfoItem icon="📅" label="Date" value={event.date} />
          <InfoItem icon="📍" label="Location" value={`${event.city}, ${event.country}`} />
          <InfoItem icon="👥" label="Attendees" value={event.attendees.toLocaleString()} />
          <InfoItem icon="🏢" label="Exhibitors" value={event.exhibitors.toLocaleString()} />
        </div>

        {/* Capex focus tags */}
        {!compact && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {event.capexFocus.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-medical-50 text-medical-700 text-xs font-medium rounded-full border border-medical-100"
              >
                {tag}
              </span>
            ))}
            {event.capexFocus.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100">
                +{event.capexFocus.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/event/${event.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-medical-700 hover:text-medical-900 transition-colors group/link"
        >
          View Details
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-base leading-none mt-0.5">{icon}</span>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-sm text-gray-700 font-medium">{value}</p>
      </div>
    </div>
  );
}
