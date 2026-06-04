export default function EventFilters({ search, onSearch, status, onStatus, year, onYear, availableYears }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Search */}
        <div className="relative sm:col-span-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search events, cities…"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="input-field pl-9"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatus(e.target.value)}
            className="select-field"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Year filter */}
        <div className="relative">
          <select
            value={year}
            onChange={(e) => onYear(e.target.value)}
            className="select-field"
          >
            <option value="all">All Years</option>
            {availableYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Active filters display */}
      {(search || status !== 'all' || year !== 'all') && (
        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500 font-medium">Active filters:</span>
          {search && (
            <FilterTag label={`"${search}"`} onRemove={() => onSearch('')} />
          )}
          {status !== 'all' && (
            <FilterTag label={status} onRemove={() => onStatus('all')} />
          )}
          {year !== 'all' && (
            <FilterTag label={year} onRemove={() => onYear('all')} />
          )}
          <button
            onClick={() => { onSearch(''); onStatus('all'); onYear('all'); }}
            className="text-xs text-medical-700 hover:text-medical-900 font-medium ml-1 hover:underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}

function FilterTag({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-medical-50 text-medical-700 text-xs font-medium rounded-full border border-medical-100">
      {label}
      <button onClick={onRemove} className="hover:text-medical-900 transition-colors ml-0.5">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </span>
  );
}
